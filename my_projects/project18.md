---
layout: default
title: Operational Schedule & Capacity Analysis
---

<div style="
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  padding: 0.5rem 1rem;
  text-align: center;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
">
  <div style="text-align: left; margin-bottom: 0.5rem;">
    <a href="/" class="back-link" style="color: #666; text-decoration: none;">
      ← Back to Portfolio
    </a>
  </div>

  <h2 style="margin: 0;">
    Operational Schedule & Capacity Analysis
  </h2>
  <small style="color: #666;">(NBA Dataset Case Study)</small>
</div>

### Project Overview
Using NBA schedules (2014–2025) as a proxy for high-frequency operational environments, this project models how **compressed timelines** impact performance. By identifying "dense stretches" (such as back-to-backs or 4-events-in-6-days), the system quantifies the degradation in efficiency and win-rates. 

The analysis uses regression modeling to offer strategies for **optimizing workload**, managing fatigue, and improving resource allocation during peak operational windows.

---

### Interactive Schedule Density Visualizer
> Navigation: Drag to zoom, shift+drag to pan, double-click to reset, hover for details.
<div style="max-width:1200px; margin:0 auto;">
  <iframe 
      src="{{ site.baseurl }}/assets/lal_schedule_2020.html" 
      width="100%" 
      height="400" 
      style="border:none;">
  </iframe>
</div>

---

### Key Operational Insights
- **Performance Degradation:** Dense scheduling clusters (e.g., back-to-backs) correlate with measurable declines in output quality (specifically defensive efficiency), serving as a proxy for workforce fatigue.
- **Trend Analysis:** The frequency and severity of these "high-stress" operational windows have trended upward over the last decade (2014–2025).
- **Resource Allocation:** Analysis suggests that "deeper rotations" (analogous to flexible staffing models) significantly mitigate the negative impacts of dense scheduling.

---

### Code and Data Integration
- **Datasets:** - NBA schedule data (2014–15 to 2024–25):
    - [Fixture Download](https://fixturedownload.com/sport/basketball)
    - [Kaggle Dataset](https://kaggle.com/datasets/911a3e298350e0e281168e3f7b9eddfdfabdda835f19119f018758c7daa2dd77)

- **[View Jupyter Notebook](https://github.com/hamzamsalah/nba-schedule-analysis/blob/main/sport_team_schedule_analysis.ipynb)**

- **Data Cleaning & ETL Pipeline:** - **Standardization:** Normalized date formats and sorted chronological workflows.  
  - **Filtering:** Segmented schedules by organizational unit (Team) and fiscal year (Season).  
  - **Feature Engineering:** Calculated logic for "Constraint Stretches" (Back-to-Backs, 4-in-6s).  
  - **Normalization:** Adjusted stretch counts to an 82-game baseline to ensure fair year-over-year comparisons.  

---

### Technologies Used
- **Analysis & Modeling:** Python (Pandas, NumPy, Scikit-learn, Statsmodels)  
- **Visualization:** Plotly (Interactive Dashboards), Matplotlib  
- **Environment:** Jupyter Notebook for data analysis and visualization

---
layout: default
title: NBA Game Stretch Analyzer
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
  <!-- Back link -->
  <div style="text-align: left; margin-bottom: 0.5rem;">
    <a href="/" class="back-link" style="color: #666; text-decoration: none;">
      ← Back to Portfolio
    </a>
  </div>

  <!-- Title -->
  <h2 style="margin: 0;">
    NBA Game Stretch Analyzer
  </h2>
</div>

### Project Overview
The NBA Game Stretch Analyzer examines NBA schedules from 2014–15 to 2024–25 to identify dense stretches like back-to-backs and 4-in-6 games. By combining schedule and performance data, it quantifies how schedule density affects efficiency, win rates, and season outcomes. Regression modeling and interactive visualizations provide insights for optimizing player workload, recovery, and strategy.

---

### Interactive NBA Schedule Stretch Analyzer
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

### Key Insights
- Dense game stretches, particularly back-to-back and 4-in-6 games, correlate with measurable declines in performance metrics such as defensive efficiency.  
- The frequency and severity of challenging game stretches have increased over the last decade.  
- Teams with deeper rotations tend to mitigate the negative impact of dense scheduling more effectively.

---

### Code and Data
- **Datasets:**  
  - NBA schedule data (2014–15 to 2024–25):
    - [Fixture Download](https://fixturedownload.com/sport/basketball)
    - [Kaggle](https://kaggle.com/datasets/911a3e298350e0e281168e3f7b9eddfdfabdda835f19119f018758c7daa2dd77)

- **[View Jupyter Notebook](https://github.com/hamzamsalah/nba-schedule-analysis/blob/main/sport_team_schedule_analysis.ipynb)**

- **Data Cleaning & Preparation:**  
  - Standardized dates and sorted games chronologically  
  - Filtered schedules by team and season  
  - Calculated game stretches such as back-to-backs and 4-in-6s  
  - Normalized stretch counts to an 82-game season for fair comparisons  

---

### Technologies Used
- Python (Pandas, NumPy, Scikit-learn, Statsmodels, Plotly, Matplotlib)  
- Jupyter Notebook for data analysis and visualization  
- Interactive dashboards to explore scheduling patterns and performance trends  

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
The NBA Game Stretch Analyzer is a comprehensive exploration of NBA schedules and how dense game stretches affect team performance. This project analyzes NBA seasons from 2014–15 through 2024–25, identifying challenging stretches such as back-to-backs, 3-in-4, and 4-in-6 games. By integrating historical schedules with team performance data, the project quantifies the impact of schedule density on metrics such as offensive and defensive efficiency, win percentage, and overall season outcomes. Using regression modeling and interactive visualizations, it offers actionable insights for coaches, analysts, and front office staff to optimize player workload management, recovery strategies, and competitive planning.

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

- **Data Cleaning & Preparation:**  
  - Standardized dates and sorted games chronologically  
  - Filtered schedules by team and season  
  - Calculated game stretches such as back-to-backs and 4-in-6s  
  - Normalized stretch counts to an 82-game season for fair comparisons  

---

### Visualizations
<div style="max-width:1200px; margin:0 auto;">
  <iframe 
      src="{{ site.baseurl }}/assets/lal_schedule_2020.html" 
      width="100%" 
      height="400" 
      style="border:none;">
  </iframe>
</div>

---

### Technologies Used
- Python (Pandas, NumPy, Scikit-learn, Statsmodels, Plotly, Matplotlib)  
- Jupyter Notebook for data analysis and visualization  
- Interactive dashboards to explore scheduling patterns and performance trends  

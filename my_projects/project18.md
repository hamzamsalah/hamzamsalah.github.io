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
  <!-- Back link (above) -->
  <div style="text-align: left; margin-bottom: 0.5rem;">
    <a href="/" class="back-link" style="color: #666; text-decoration: none;">
      ← Back to Portfolio
    </a>
  </div>

  <!-- Title (below) -->
  <h2 style="margin: 0;">
    NBA Game Stretch Analyzer
  </h2>
</div>

### Project Overview
This project, **NBA Game Stretch Analyzer**, examines team schedules from the 2014–15 through 2024–25 NBA seasons to identify **dense game stretches**—periods of consecutive games that could affect player performance.  

The goal is to quantify stretches like **4 games in 6 nights** or **back-to-back games**, analyze their impact on team performance (e.g., defensive efficiency), uncover trends in scheduling over time, and model the influence of schedule density on total wins.

By combining historical schedules, team performance metrics, and regression modeling, the study provides actionable insights for coaches, front office staff, and analysts to **manage player load, optimize recovery, and anticipate performance fluctuations**.

---

### Key Insights
<!-- Placeholder for your dataset results -->
- 
-

---

### Code and Data
- **Datasets:**  
  - NBA schedule data (2014–15 to 2024–25)  
  - Team performance and game-level stats (e.g., points, defensive eFG%)  
  - Locations and travel data
- **Cleaning and Prep:**  
  - Converted dates, sorted, and indexed by game date  
  - Filtered by team and season  
  - Calculated rolling game stretches (e.g., 4-in-6, back-to-back)  
  - Standardized stretch counts to 82-game seasons for comparability
- [View Full Notebook on GitHub](#)  

---

### Visualizations

<!-- Embedded Plotly interactive chart -->
<div style="width:100%; height:650px;">
  <iframe src="projects/lal_schedule_2020.html" width="100%" height="650" style="border:none;"></iframe>
</div>

---

### Technologies Used
- Python (Pandas, NumPy, Scikit-learn, Statsmodels, Plotly, Matplotlib)  
- Jupyter Notebook  
- Interactive and static visualizations for team schedules and stretch analysis  

<hr style="margin: 2rem 0;">
<p style="text-align: center; color: #666;">© 2025 Hamza Salah</p>

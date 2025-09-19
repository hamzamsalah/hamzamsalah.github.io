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
As part of the DSC680 Applied Data Science course at Bellevue University, I developed the NBA Game Stretch Analyzer to investigate how dense scheduling affects team performance. The project examines NBA schedules from the 2014–15 through 2024–25 seasons to identify challenging game stretches, such as 4 games in 6 nights or back-to-back games.  

The analysis quantifies the impact of these stretches on metrics like offensive/defensive efficiency, explores trends in scheduling over time, and models how schedule density correlates with total season wins. By combining historical schedules, team performance data, and regression modeling, this project provides insights for coaches, analysts, and front office staff to optimize player load management, recovery strategies, and performance prediction.

---

### Key Insights
<!-- Placeholder for your dataset results -->
- Dense stretches significantly affect defensive efficiency in certain teams.  
- Back-to-back games and 4-in-6 stretches show measurable performance decline.  
- Trends indicate increasing schedule density over the analyzed decade.

---

### Code and Data
- **Datasets:**  
  - NBA schedule data (2014–15 to 2024–25) from [Fixture Download](https://fixturedownload.com/sport/basketball)  
  - Team performance and game-level stats (points, offensive/defensive eFG%)  
  - Locations and travel data
- **Data Cleaning & Preparation:**  
  - Converted dates and sorted games chronologically  
  - Filtered by team and season  
  - Calculated rolling game stretches (e.g., 4-in-6, back-to-back)  
  - Standardized stretch counts to 82-game seasons for consistency
- [View Full Notebook on GitHub](#)  

---

### Visualizations
<!-- Embedded Plotly interactive chart -->
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
- Jupyter Notebook for analysis and visualization  
- Interactive and static visualizations to explore scheduling patterns  

<hr style="margin: 2rem 0;">
<p style="text-align: center; color: #666;">© 2025 Hamza Salah</p>

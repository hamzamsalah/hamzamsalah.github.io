---
layout: default
title: Predictive Modeling of Tennessee Energy Demand
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
    Predictive Modeling of Tennessee Energy Demand
  </h2>
</div>

### Project Overview
This project, **Tennessee Energy Insights**, analyzes electricity consumption in Tennessee across residential, commercial, industrial, and combined sectors from 2010–2024.  
The focus is on understanding how **average temperature and electricity pricing drive demand** and building predictive models for more accurate forecasting.  

By uncovering seasonal patterns and external drivers, the study provides **actionable insights for policymakers, utility companies, and community planners** to manage resources efficiently, especially as new infrastructure and climate variability increase demand pressures:contentReference[oaicite:0]{index=0}.

---

### Key Insights
- **SARIMAX consistently outperformed ARIMA** across all sectors with lower MAE, RMSE, and MAPE.  
  - Residential MAPE: 5.69% (SARIMAX) vs. 6.82% (ARIMA)  
  - Commercial MAPE: 2.02% vs. 3.50%  
  - Industrial MAPE: 4.10% vs. 8.14%  
  - Combined MAPE: 2.89% vs. 4.93%:contentReference[oaicite:1]{index=1}  
- **Residential & Commercial demand** is highly seasonal, strongly influenced by temperature (especially HVAC usage).  
- **Industrial demand** shows a steady decline post-2014, suggesting efficiency gains independent of weather.  
- **Transportation data** was too incomplete for meaningful modeling.  
- Recommendations include **customer alerts for peak demand, incentives for efficiency, industrial sector support, and better transportation data collection**:contentReference[oaicite:2]{index=2}.

---

### Code and Data
- **Datasets**:  
  - Monthly electricity consumption (EIA, 2010–2024)  
  - Monthly average temperatures (NOAA, 2010–2024):contentReference[oaicite:3]{index=3}  
- **Cleaning and Prep**:  
  - Merged datasets by date  
  - Created sector-level subsets (Residential, Commercial, Industrial, Combined)  
  - Standardized consumption & temperature variables  
- [View Full Notebook on GitHub](https://github.com/hamzamsalah/Electricity_Consumption_in_TN/blob/main/electricitiy_demand.ipynb)  
- Data sources: [EIA.gov](https://www.eia.gov/electricity/data/state/), [NOAA Climate Data](https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/)  

---

### Visualizations
- **Boxplots** to check for outliers (retained to preserve seasonality)  
- **Correlation heatmaps** showing temperature’s varying influence across sectors (35% combined)  
- **Time-series plots** of scaled consumption vs. temperature  
- **Forecast charts (ARIMA vs. SARIMAX)** for each sector, with SARIMAX closely matching actual 2024 values  
- Example:  
![Sector Forecast]({{ site.baseurl }}/assets/combined_sector_forecast.png)  
![Forecast Table]({{ site.baseurl }}/assets/combined_sector_forecast_table.png)  

---

### Technologies Used
- Python (Pandas, NumPy, Scikit-learn, Statsmodels, pmdarima)  
- Jupyter Notebook  
- Matplotlib, Seaborn for visualization  
- Tableau for interactive exploration  

<hr style="margin: 2rem 0;">
<p style="text-align: center; color: #666;">© 2025 Hamza Salah</p>

---
layout: default
title: Retail Demand Forecasting
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
    Retail Demand Forecasting
  </h2>
</div>

### Project Overview
The Retail Demand Forecasting project applies time series modeling to predict retail product demand using historical sales and promotional data. By leveraging ARIMA, Auto ARIMA, and SARIMAX models, the project identifies seasonal patterns, promotional impacts, and category-level trends to enhance inventory planning and reduce operational inefficiencies.

---

### Visualizations

---

### Key Insights
- SARIMAX models achieved the **lowest RMSE (165.10)**, outperforming ARIMA and Auto ARIMA by accounting for seasonality and promotions.  
- **Promotions** had a measurable positive effect on sales volume, especially during peak seasons.  
- **Toys** showed steady growth, while **Electronics** and **Apparel** exhibited cyclical demand patterns.  
- Accurate forecasts can directly reduce **overstocking**, **stockouts**, and **inventory carrying costs**.

---

### Code and Data
- **Dataset:**  
  - [Synthetic Retail Sales Dataset — Kaggle](https://www.kaggle.com/)  
  - 3 years of daily sales data across multiple product categories  

- **Data Cleaning & Preparation:**  
  - Converted and standardized date fields  
  - Created time-based features (Year, Month, Year-Month)  
  - Aggregated daily sales to monthly totals  
  - Split dataset into training (pre-2024) and testing (2024) sets  

- **[View Jupyter Notebook](https://github.com/hamzamsalah/retail-demand-forecasting/blob/main/retail_demand_forecasting.ipynb)**  

---

### Technologies Used
- Python (Pandas, NumPy, Statsmodels, Pmdarima, Scikit-learn, Matplotlib, Seaborn)  
- Jupyter Notebook for analysis and modeling  
- Interactive Plotly dashboard for visualization and exploration  

---

### Recommendations
- Deploy SARIMAX forecasting to improve real-time retail demand prediction.  
- Integrate **external features** (weather, holidays, pricing) to improve accuracy.  
- Use forecasts to align marketing and inventory decisions:
  - Plan promotions during forecasted high-demand periods.  
  - Adjust stock levels proactively to prevent shortages or overstocking.  

---

### Risks and Ethical Considerations
- **Data Limitations:** Synthetic datasets may not fully reflect real-world behavior.  
- **Ethics:** Only non-sensitive, publicly available data were used.  
- **Mitigation:** Retrain models periodically using fresh and validated datasets.  

---

### Summary
Retail Demand Forecasting demonstrates how statistical modeling and time series analysis can transform retail decision-making. Incorporating seasonality and promotional data through SARIMAX enables accurate, actionable demand predictions—driving smarter inventory management and higher profitability.

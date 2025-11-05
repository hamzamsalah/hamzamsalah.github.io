---
layout: default
title: Portfolio
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
    Retail Demand Forecasting
  </h2>
</div>

### Summary
Retail Demand Forecasting demonstrates how statistical modeling and time series analysis can transform retail decision-making. Incorporating seasonality and promotional data through SARIMAX enables accurate, actionable demand predictions-driving smarter inventory management and higher profitability.

---

### Visualizations & Tables

<img src="/assets/retail_table.png?raw=true" />

<img src="/assets/retail_forecast_plot.png?raw=true" />

---

### Key Insights
- SARIMAX models achieved the **lowest RMSE (165.10)**, outperforming ARIMA and Auto ARIMA by accounting for seasonality and promotions.  
- **Promotions** had a measurable positive effect on sales volume, especially during peak seasons.  
- **Toys** showed steady growth, while **Electronics** and **Apparel** exhibited cyclical demand patterns.  
- Accurate forecasts can directly reduce **overstocking**, **stockouts**, and **inventory carrying costs**.

---

### Code and Data
- **Dataset:**  
  - [Synthetic Retail Sales Dataset — Kaggle](https://kaggle.com/datasets/da6f0cb7066b3542693967e16f46a6e6b68c7259b602a5406113cc6121094efa)  
  - 3 years of daily sales data across multiple product categories  

- **Data Cleaning & Preparation:**  
  - Converted and standardized date fields  
  - Created time-based features (Year, Month, Year-Month)  
  - Aggregated daily sales to monthly totals  
  - Split dataset into training (pre-2024) and testing (2024) sets  

- **[View Jupyter Notebook](https://github.com/hamzamsalah/retail_demand_forecast/blob/main/Salah_Project1_Retail.ipynb)**
  
- **[View Paper](https://github.com/hamzamsalah/retail_demand_forecast/blob/main/Salah_Project1_Final_Paper.pdf)**
  
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

<br><br><br>

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
  <h2 style="margin: 0;">
    Retail IRI Detection
  </h2>
</div>

### Summary
Retail Inventory Record Inaccuracy (IRI) is a major driver of cost and inefficiency. This project develops a **Logistic Regression** model to predict the probability of an IRI event at the **SKU-Store-Day level**, transforming reactive inventory management into a proactive, audit-driven system. The model utilizes daily operational data (inventory, sales, adjustments) and time-based features to prioritize high-risk items for audit.

---

### Visualizations & Tables

**Confusion Matrix (Threshold: 0.50)**


**Receiver Operating Characteristic (ROC) Curve**


---

### Key Insights
- The **Logistic Regression** model achieved a strong and balanced performance with a high **ROC AUC of 0.87**.
- The default **0.50 threshold** resulted in a **Recall (True Positive Rate) of 0.83**, meaning the model correctly identified **83.16%** of actual inventory issues.
- **Inventory\_level** and **Physical\_Count** features show the highest correlation with IRI detection.
- The **trade-off between False Positives (wasted audit time)** and **False Negatives (missed issues)** is the primary operational challenge, highlighting the need for a tunable probability threshold.
- The model successfully generates a **prioritized, actionable suspect list** for store teams, directing audit efforts to the highest-risk products.

---

### Code and Data
- **Dataset:** Synthetic Retail Data with time-series inventory and operational records.
- **Data Cleaning & Preparation:**
    - Feature engineering for time (Day\_of\_Week).
    - **One-Hot Encoding** of categorical features (`Store_ID`, `Product_ID`).
    - Standard **Train-Test split** based on date (`Date` < '2024-01-01' for training).

- **[View Jupyter Notebook](https://github.com/yourusername/iri_detection/blob/main/Salah_Project2_IRI.ipynb)** (Placeholder - **Please Update Link**)
  
- **[View Paper](https://github.com/yourusername/iri_detection/blob/main/Salah_Project2_Final_Paper.pdf)** (Placeholder - **Please Update Link**)
  
---

### Technologies Used
- Python (Pandas, NumPy, Matplotlib, Seaborn)
- **Scikit-learn** (Logistic Regression, OneHotEncoder, `classification_report`, `confusion_matrix`)
- Jupyter Notebook for analysis and modeling

---

### Recommendations
- **Dynamic Thresholding:** Implement a system to adjust the model's prediction threshold based on **current business needs** (e.g., increase precision during peak season to reduce false alarms, or increase recall during inventory count periods).
- **Model Explainability:** Use techniques like **SHAP values** to understand *why* a specific SKU is flagged, providing valuable context to store operations teams.
- **Feature Enrichment:** Incorporate additional operational metrics such as **Shrinkage Rate**, **Cycle Count History**, and **Supplier Performance** to further boost predictive accuracy.
- **Audit Integration:** Automatically push the **Top N Suspect List** (like the `print_suspect_list` output) directly to a mobile audit application for immediate action.

---

### Risks and Ethical Considerations
- **Imbalanced Data:** The high imbalance in the target variable (`IRI_Detected_tomorrow`) can bias models. Mitigation included using metrics like **Recall** and **ROC AUC** instead of just accuracy.
- **Over-Auditing:** A low-precision model (high False Positives) can lead to **audit fatigue** among store staff.
- **Data Drift:** Changes in store processes, fraud patterns, or product mix will require **periodic model retraining** and validation.

---

Would you like me to replace the placeholder links for the IRI project with actual URLs?

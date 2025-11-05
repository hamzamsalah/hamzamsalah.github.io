---
layout: default
title: Retail Inventory Record Inaccuracy (IRI) Detection
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
    Retail Inventory Record Inaccuracy (IRI) Detection
  </h2>
</div>

### Project Overview
Developed and validated a **Logistic Regression** model using daily sales, stock, and transactional flow data to proactively forecast the binary risk of **Inventory Record Inaccuracy (IRI)** at the Store-SKU level 24 hours in advance. This approach enables a strategic shift to risk-based inventory audits, minimizing lost sales from phantom stockouts.

#### Key Insights
* **Primary Predictor:** Low stock status (`In_stock_t`) is the strongest indicator of imminent IRI risk, showing a substantial negative correlation of -0.63 with the target.
* **Model Performance:** The final model achieved a high F1-Score of 0.83 on the positive risk class, significantly exceeding the target of 0.70, and demonstrated excellent discriminatory power with an AUC of 0.92.
* **Operational Impact:** The model successfully generated a daily High-Risk Suspect List, validated to have a high confirmation rate (8 out of 10) for actual IRI cases, directly optimizing audit labor.
* **Data Imbalance:** The analysis managed a notable class imbalance (38% IRI cases) by focusing evaluation strictly on the F1-Score of the minority risk class.

---
### Code and Data
* [View Analysis on GitHub](https://github.com/hamzamsalah/retail_iri_prediction)

* [Dataset](https://kaggle.com/datasets/e464721e61fa8ce62c39b3012fe709bc61cedbd5f1f956cb65a1f97baa84ad77)


---
  
### Key Visualizations

![IRI Table]({{ site.baseurl }}/assets/retail_iri_table.png)

---
### Technologies Used
* **Python** (Pandas, NumPy)
* **Scikit-learn** (Logistic Regression, OneHotEncoder)
* **Jupyter Notebook**
* **Matplotlib, Seaborn**

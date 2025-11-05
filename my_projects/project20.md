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
  margin-bottom: 1rem;  /* 👈 space under the border */
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
Built a Logistics Regression model to predict Inventory Record Inaccuracy (IRI) in retail SKUs one day in advance using sales, stock, and purchasing data to optimize physical inventory audits.

#### Key Insights
* **Target Imbalance:** The target variable (IRI) is highly imbalanced, which significantly influences model training and evaluation.
* **Sales & Inventory Link:** High inventory levels and low item sales are correlated with increased IRI risk.
* **Day-of-Week Pattern:** IRI occurrence rates show clear spikes on specific days of the week, suggesting operational process gaps.
* **Model Performance:** The final model achieved an **81% accuracy** and a **Recall of 83.16%** on IRI cases, providing a high-confidence list of products for targeted audits.

---
### Code and Data
* [View Analysis on GitHub]({{ site.baseurl }}/assets/retail_iri_detection)  * [Download Dataset](retail_data_with_seasonality.csv) ---

  
### Key Visualizations

![IRI Table]({{ site.baseurl }}/assets/retail_iri_table.png)





---
### Technologies Used
* **Python** (Pandas, NumPy)
* **Scikit-learn** (Logistic Regression, OneHotEncoder)
* **Matplotlib, Seaborn**
* **Jupyter Notebook**

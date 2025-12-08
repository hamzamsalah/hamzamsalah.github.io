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
    Predictive Modeling of Retail Inventory Inaccuracy (IRI) for Audit Prioritization
  </h2>
</div>

### Project Overview

Architected a predictive framework to forecast Inventory Record Inaccuracy (IRI) risk 24 hours ahead, utilizing a custom **Monte Carlo simulation** to act as a "Digital Twin" of a retail supply chain. By modeling complex operational dynamics—including seasonality, probabilistic shrinkage, and phantom stockouts. I generated a robust dataset to train a highly interpretable Logistic Regression model. This project validates a strategic shift to Risk-Based Cycle Counting, demonstrating how predictive modeling can eliminate labor waste and minimize lost sales within a simulated retail environment.

#### Key Insights

* **Primary Predictor:** Low stock status (`In_stock_t`) was identified as the strongest indicator of imminent IRI risk within the simulation, showing a substantial negative correlation of -0.63 with the target variable.

* **Model Performance:** The model achieved an F1-Score of 0.83 on the critical positive risk class (exceeding the 0.70 target) and demonstrated excellent discriminatory power with an AUC of 0.92 on the held-out validation set.

* **Operational Impact:** A "Virtual Audit" conducted on the model's predictions confirmed an 80% success rate in identifying discrepancies. This validates that a high-accuracy Suspect List can effectively optimize labor by focusing resources exclusively on high-probability errors.

* **Data Handling:** Class imbalance (38% IRI cases) was managed effectively without oversampling, prioritizing evaluation strictly on the F1-Score of the minority risk class.

---
### Code and Data

* [Paper](https://github.com/hamzamsalah/retail_iri_prediction/blob/main/Salah_Project2_Paper.pdf)

* [Notebook](https://github.com/hamzamsalah/retail_iri_prediction/blob/main/salah_project2_retail.ipynb)

* [Dataset](https://kaggle.com/datasets/e464721e61fa8ce62c39b3012fe709bc61cedbd5f1f956cb65a1f97baa84ad77)


---
  
### Key Visualizations

![IRI Confusion Matrix]({{ site.baseurl }}/assets/retail_iri_cm.png)


![IRI Feature Table]({{ site.baseurl }}/assets/retail_iri_table.png)

---
### Technologies Used
* **Python** (Pandas, NumPy)
* **Monte Carlo Simulation Strategy**
* **Scikit-learn** (Logistic Regression, OneHotEncoder)
* **Jupyter Notebook**
* **Matplotlib, Seaborn**

---
layout: default
title: Return Prediction in E-commerce
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
    Return Prediction in E-commerce
  </h2>
</div>

### **Project Overview**

This academic project focused on modeling and predicting product returns in e-commerce, a problem estimated to cost the retail sector nearly $890 billion annually. Using a simulated dataset with intentional biases, the goal was to identify key risk factors and build an interpretable binary classification model to predict the target variable, *is\_returned*. The analysis utilized a Logistic Regression model trained with balanced class weights to enable proactive business intervention and reduce costs associated with returns.

#### **Key Insights**

* **Dominant Predictors:** The strongest predictive features identified were the Cash payment method and weekend orders (Friday, Saturday, Sunday). These non-logistical factors significantly outweighed product-level factors in predicting returns.

* **Target Performance (Recall):** The model achieved a valuable **Recall (Sensitivity) of 60%** for the minority class (Returns). This high recall allows the business to correctly identify three out of every five potential returns for pre-delivery intervention.

* **Model Trade-off:** The model suffered from low **Precision (0.24)** and a weak **F1-score of 0.34** for the Returns class, indicating a high rate of False Positives. Overall model **Accuracy was 62%**, and the **Area Under the Curve (AUC) score was 0.70**.

* **Data Handling:** The dataset contained **100k records** and exhibited a severe class imbalance, with only **16%** of records indicating a return. The use of balanced class weights was critical for training, but the primary success metric was Recall.

---

### **Key Visualizations**

![Chart1]({{ site.baseurl }}/assets/purchased.png)

![Chart2]({{ site.baseurl }}/assets/returns.png)

---

### **Business Recommendations**

* **Prioritize Interventions:** Focus intervention efforts primarily on orders made using the Cash payment method and those placed on weekends. Interventions could include immediate pre-shipment quality checks or targeted confirmation communications.
* **Optimize Decision Threshold:** To strategically reduce the cost associated with False Positives, raise the classification decision threshold from the default 0.5 to 0.7 or 0.8. This increases the confidence (Precision) of flagged orders at the expense of Recall.
* **Future Work:** Future modeling efforts should focus on implementing more advanced classifiers (e.g., Gradient Boosting) and engineering features related to customer history (e.g., past return rate).

---
### **Code and Data**

* [View Full Notebook on GitHub](https://github.com/hamzamsalah/product_returns/blob/main/salah_project3.ipynb)

---
### **Technologies Used**

* **Python** (Pandas, NumPy)
* **Scikit-learn** (Logistic Regression, evaluation metrics)
* **Jupyter Notebook**
* **Matplotlib, Seaborn**

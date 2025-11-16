---
layout: default
title: Return Prediction in E-commerce: Modeling of Key Risks
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
    Return Prediction in E-commerce: Modeling of Key Risks
  </h2>
</div>

### Project Overview

This project focused on modeling and predicting product returns in e-commerce, a problem estimated to cost the retail sector nearly **$890 billion annually**. Using a simulated dataset with intentional biases, the goal was to identify key risk factors and build a binary classification model to predict the target variable, *is\_returned*. The analysis utilized an interpretable **Logistic Regression** model trained with balanced class weights to enable proactive business intervention.

---

### Key Insights

* **Dominant Predictors:** The strongest predictive features identified were the **Cash payment method** and **weekend orders** (Friday, Saturday, Sunday). These factors significantly outweighed logistical and product-level factors.
* **Target Performance (Recall):** The model achieved a respectable **Recall (Sensitivity) of 60%** for the minority class (Returns). This is the most valuable business outcome as it allows the business to correctly identify three out of every five future returns for pre-delivery intervention.
* **Model Weakness (Precision):** The model's overall **Accuracy was 62%**, but it suffered from **low Precision (0.24)** and a weak **F1-score of 0.34** for the Returns class. This highlights a high proneness to **False Positives**.
* **Data Characteristics:** The dataset contained **100k records** and exhibited a severe class imbalance, with only **16% of records** indicating a return. The **Area Under the Curve (AUC) score was 0.70**.

---

### Recommendations

* **Prioritize Interventions:** Focus intervention efforts primarily on orders made using the Cash payment method and those placed on weekends. Interventions could include immediate pre-shipment quality checks or sending targeted confirmation communications.
* **Optimize Decision Threshold:** To reduce the cost associated with False Positives, raise the decision threshold from 0.5 to 0.7 or 0.8. This increases the confidence (Precision) of those that are flagged.
* **Future Work:** Future work should implement more

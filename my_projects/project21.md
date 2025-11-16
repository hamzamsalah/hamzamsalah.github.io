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

[cite_start]This project focused on modeling and predicting product returns in e-commerce, a problem estimated to cost the retail sector nearly **$890 billion annually**[cite: 12, 21]. [cite_start]Using a simulated dataset with intentional biases, the goal was to identify key risk factors and build a binary classification model to predict the target variable, *is\_returned*[cite: 13, 14]. [cite_start]The analysis utilized an interpretable **Logistic Regression** model trained with balanced class weights to enable proactive business intervention[cite: 14, 27].

---

#### Key Insights

* [cite_start]**Dominant Predictors:** The strongest predictive features identified were the **Cash payment method** and **weekend orders** (Friday, Saturday, Sunday), which significantly outweighed logistical and product-level factors[cite: 16, 121, 122, 214].
* [cite_start]**Target Performance (Recall):** The model achieved a **Recall (Sensitivity) of 60%** for the minority class (Returns)[cite: 15, 115, 213, 253]. [cite_start]This is considered the most valuable business outcome as it allows the business to correctly identify three out of every five future returns for pre-delivery intervention[cite: 218, 219].
* [cite_start]**Model Weakness (Precision):** The model's overall **Accuracy was 62%**, but it suffered from **low Precision (0.24)** and a weak **F1-score of 0.34** for the Returns class[cite: 15, 112, 113, 116, 213]. [cite_start]This highlights a high proneness to False Positives, meaning it incorrectly flags non-returned items as high-risk[cite: 15, 113, 174, 220].
* [cite_start]**Data Characteristics:** The dataset contained **100k records** [cite: 40] [cite_start]and exhibited a severe class imbalance, with only **16% of records** indicating a return[cite: 41, 109]. [cite_start]The **Area Under the Curve (AUC) score was 0.70**[cite: 117].

---
### Code and Data

* [Paper](https://github.com/hamzamsalah/retail_iri_prediction/blob/main/Salah_Project2_Paper.pdf)
* [Notebook](https://github.com/hamzamsalah/retail_iri_prediction/blob/main/salah_project2_retail.ipynb)
* [Dataset](https://kaggle.com/datasets/e464721e61fa8ce62c39b3012fe709bc61cedbd5f1f956cb65a1f97baa84ad77)


---
  
### Key Visualizations



---
### Technologies Used
* [cite_start]**Python 3.7** [cite: 80] (Pandas, NumPy) [cite_start][cite: 81]
* [cite_start]**Scikit-learn** (Logistic Regression, StandardScaler, train\_test\_split, metrics functions) [cite: 81]
* **Jupyter Notebook** (Implied by standard workflow)
* [cite_start]**Matplotlib, Seaborn** [cite: 81]

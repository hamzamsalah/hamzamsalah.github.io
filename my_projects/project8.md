---
layout: default
title: Weather Lookup
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
  <!-- Back link (above) -->
  <div style="text-align: left; margin-bottom: 0.5rem;">
    <a href="/" class="back-link" style="color: #666; text-decoration: none;">
      ← Back to Portfolio
    </a>
  </div>

  <!-- Title (below) -->
  <h2 style="margin: 0;">
    Weather Lookup
  </h2>
</div>

### Project Overview
A simple CLI tool for fetching real-time weather data via API integration.

#### Key Insights
- Supports city/zip queries with forecasts.
- Handles API errors gracefully.
- Output includes temp, humidity, and conditions.

### Code and Data
- [View Full Code on GitHub](https://github.com/HmSalah/weather-lookup)
- [API Docs](https://openweathermap.org/api)

### Visualizations
![Weather Lookup]({{ site.baseurl }}/assets/weather_lookup.png)

### Technologies Used
- Python
- OpenWeatherMap API

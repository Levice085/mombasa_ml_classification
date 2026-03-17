# Mombasa Land Cover Classification: End-to-End Geospatial Machine Learning Project

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)
[![EarthEngine](https://img.shields.io/badge/Google%20Earth%20Engine-API-green.svg)](https://earthengine.google.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-Random%20Forest-orange.svg)](https://scikit-learn.org/)
[![QGIS](https://img.shields.io/badge/QGIS-Web%20Mapping-lightgrey.svg)](https://qgis.org/)

<p align="center">
  <img src="https://github.com/Levice085/mombasa_ml_classification/blob/main/mombasa_land_cover_screenshot.PNG" alt="Mombasa Land Cover Classification Map" width="800">
</p>
##  Project Overview
This project demonstrates an end-to-end geospatial machine learning pipeline. It takes raw, multi-spectral satellite imagery of Mombasa, Kenya, translates the spatial data into a tabular format, trains a machine learning classifier to identify distinct spectral signatures, and reconstructs the predictions into a fully interactive web map. 

The model successfully categorizes every 10-meter pixel into one of four distinct land cover classes: **Water**, **Urban (Built-up)**, **Bareground** and **Vegetation**, achieving an **Overall Accuracy of 89%**.

 **[View the Live Interactive Map Here](https://levice085.github.io/mombasa_ml_classification/)**

---

##  Tech Stack
* **Data Sourcing & Cloud Computing:** Google Earth Engine (GEE) Python API, `geemap`
* **Data Engineering:** `pandas`, `numpy`, `rasterio`
* **Machine Learning:** `scikit-learn` (Random Forest Classifier)
* **Geospatial Visualization:** QGIS, `qgis2web` (OpenLayers/Leaflet)

---

## Methodology & Pipeline

### 1. Cloud-Native Data Sourcing
Instead of manually downloading and processing heavy satellite imagery, the Google Earth Engine Python API was utilized to programmatically access the **Sentinel-2 Surface Reflectance** dataset. 
* A custom region of interest (ROI) was defined using a Mombasa boundary shapefile.
* A temporal median composite was generated for the year to programmatically mask out clouds and shadows.
* The optical and near-infrared bands (B2, B3, B4, B8) were extracted and clipped to the exact county geometry.

### 2. Feature Engineering & Sampling
* Ground truth training polygons were manually digitized over known Water, Urban, and Vegetation zones.
* The `.sampleRegions()` function was used to extract the raw light reflectance values (features) for those specific pixels.
* The extracted spatial data was converted into a standard tabular Pandas DataFrame and downsampled to ensure perfectly balanced classes before training.

### 3. Machine Learning (Random Forest)
A **Random Forest Classifier** was selected due to its robust performance with non-linear, multi-dimensional spectral data. 
* The dataset was split into an 80/20 Train-Test split.
* The model learned the distinct spectral signatures of each class (e.g., how healthy vegetation highly reflects Near-Infrared light compared to concrete or water).
* **Performance:** The model achieved an **89% overall accuracy** on the hidden test set.

### 4. Spatial Reconstruction & Prediction
The trained local `scikit-learn` model was deployed across the entire Sentinel-2 raster.
* `rasterio` was used to flatten the 229 MB `.tif` file into millions of rows.
* The model predicted the land cover class for every individual pixel in the city.
* The 1D array of predictions was reshaped back into a 2D spatial grid, preserving the original coordinate reference system (CRS) and metadata, and exported as a new classified raster file.

### 5. Interactive Web Deployment
The final predicted `.tif` file was styled in **QGIS**. Using the `qgis2web` plugin, the static map was converted into an interactive HTML/JS web application, complete with a professional legend, scale bar, and measurement tools, and hosted live via GitHub Pages.

---

## How to Run Locally
1. Clone the repository: `git clone https://github.com/yourusername/mombasa-landcover-ml.git`
2. Install the required dependencies: `pip install pandas numpy scikit-learn rasterio earthengine-api geemap`
3. Authenticate your Earth Engine account: `import ee; ee.Authenticate()`
4. Run the Jupyter Notebook step-by-step to replicate the data extraction, model training, and spatial prediction.

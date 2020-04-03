# Horizzn°

Simple, accurate, and beautiful Earth Curvature Calculator.

![Earth Curvature Calculator screenshot](https://horizzn.com/images/ecc-screenshot.png)

[https://horizzn.com](https://horizzn.com)

## Assumptions
1. Light travels in a straight line.
2. The Earth is a sphere with a radius of 6371 kilometers.

## How to use the Calculator?
Calculating the Earth curvature with Horizzn Calculator is a simple two-step process:

### 1️⃣

Fill in your `EYESIGHT HEIGHT` / `H` in the first input field, that's your eyesight height in relation to sea level. This will return your `DISTANCE TO HORIZON` / `D1`.`

### 2️⃣

Fill in your `DISTANCE TO TARGET` / `D` in the second input field, that's the distance between you and the target object in the distance. This will return the `TARGET HIDDEN HEIGHT` / `H1` of the distant object/target.

## How to calculate Earth curvature?

Assuming Earth is a sphere with a radius of 6371 kilometers we can use the **Pythagorean Theorem** and accurately calculate the Distance to (the) Horizon.

Then, we can use the `Distance to Horizon` to calculate the rate of which Earth curves and find the height of the `Hidden Target Height` of a distant target or an object.

We can manually calculate Earth curvature using these two formulas:

``` js
a = √[(r + h)² - r²]

a = Your distance to the horizon
r = Earth radius
h = Your height above sea level
```

``` js
x = √(a² - 2ad + d² + r²) - r 

x = Hidden object part
d = Your distance to the object
```

## Disclaimer

 Users of Earth Curvature Calculators all over the world report experiencing mental discomfort due to discrepancies between calculated results and real-life observations.


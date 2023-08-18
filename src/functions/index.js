export const generateGeoSeries = (data, center, radius) => {
    const series = {
        type: "pie",
        coordinateSystem: 'geo',
        center,
        radius,
        animationDuration: 0,
        data: data,
        labelLine: {
            show: false
        },
        label: {
            show: false
        },
    }

    return series;
}
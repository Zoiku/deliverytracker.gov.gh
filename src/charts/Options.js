import * as echarts from "echarts";
import mapJson from '../assets/map/Ghana.json';
import { generateGeoSeries } from "../functions";
echarts.registerMap("Ghana", mapJson);

const data = [
    { value: 60, name: 'Agriculture' },
    { value: 40, name: 'Infrastructure' },
    { value: 70, name: 'Roads' },
    { value: 50, name: 'Sanitation' },
]

const pie = {
    legend: {
        top: 'bottom'
    },
    series: [
        {
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 10
            },
            data: [
                { value: 60, name: 'Agriculture' },
                { value: 40, name: 'Infrastructure' },
                { value: 70, name: 'Roads' },
                { value: 50, name: 'Sanitation' },
                { value: 90, name: 'Education' },
                { value: 40, name: 'Religion' },
            ]
        }
    ]
}

const map = {
    geo: {
        map: 'Ghana',
        roam: false,
        itemStyle: {
            areaColor: '#e7e8ea'
        }
    },
    legend: {
        top: 'top'
    },
    series: [
        generateGeoSeries(data, [-1, 9.240471], 30),
        generateGeoSeries(data, [-0.9, 10.8], 10),
        generateGeoSeries(data, [-2.2, 10.4], 15),
        generateGeoSeries(data, [-1.5, 7.9], 15),
        generateGeoSeries(data, [-1.5, 6.8], 25),
        generateGeoSeries(data, [-2.4, 5.7], 15),
        generateGeoSeries(data, [-1.1, 5.5], 10),
        generateGeoSeries(data, [-0.1, 5.7], 10),
        generateGeoSeries(data, [-0.4, 6.3], 15),
    ]
}

export { pie, map };
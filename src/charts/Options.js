const name = "Promises Summary";

const data = [
  {
    value: 10,
    name: "Unstarted",
    itemStyle: { color: "rgba(170, 170, 170, 0.6)" },
  },
  {
    value: 1,
    name: "Progress",
    itemStyle: { color: "rgba(67, 135, 116, 0.6)" },
  },
  {
    value: 1,
    name: "Stalled",
    itemStyle: { color: "rgba(183, 171, 43, 0.6)" },
  },
  {
    value: 1,
    name: "Delivered",
    itemStyle: { color: "rgba(36, 178, 0, 0.6)" },
  },
  {
    value: 1,
    name: "Compromised",
    itemStyle: { color: "rgba(255, 81, 1, 0.6)" },
  },
  { value: 1, name: "Broken", itemStyle: { color: "rgba(246, 25, 0, 0.6)" } },
];

const pieDesktop = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: 0,
    left: "center",
  },
  series: [
    {
      name: name,
      type: "pie",
      radius: ["85%", "30%"],
      avoidLabelOverlap: false,
      startAngle: 180,
      itemStyle: {
        borderRadius: 20,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
        formatter: "{b}: {c} ({d}%)",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: data,
    },
  ],
};

const pieMobile = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: 0,
    left: "center",
  },
  series: [
    {
      name: name,
      type: "pie",
      radius: ["100%", "50%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 20,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: true,
        position: "inside",
        formatter: "{b}: {c}",
        fontWeight: 800
      },
      labelLine: {
        show: false,
      },
      data: data,
    },
  ],
};

export { pieMobile, pieDesktop };

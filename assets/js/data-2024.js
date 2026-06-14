window._chartConfigs = {};

const mci = [ 6.43, 3.27, 2.53, 1.99, 1.6, 7.28, 9.15, 12.66, 11.04, 10.44, 10.67, 10.8, 11.19, 12.69, 12.5, 11.15, 11.79, 13.09, 13.76, 13.2, 12.58, 11.96, 10.87, 9.44 ];

const cfg1 = {
    series: [ {
        name: "Congestion Index",
        data: mci
    } ],
    chart: {
        type: "area",
        height: 340,
        background: "transparent",
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        fontFamily: "'DM Sans', sans-serif",
        animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800
        }
    },
    stroke: {
        curve: "smooth",
        width: 2.5,
        colors: [ "#D42321" ]
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: .5,
            gradientToColors: [ "#D42321" ],
            opacityFrom: .2,
            opacityTo: .01,
            stops: [ 0, 95 ]
        }
    },
    markers: {
        size: 3.5,
        colors: [ "#1e2131" ],
        strokeColors: "#D42321",
        strokeWidth: 2,
        hover: {
            size: 5.5
        }
    },
    xaxis: {
        categories: hours,
        labels: {
            style: {
                colors: Array(24).fill("rgba(240,241,247,0.45)"),
                fontSize: "11px",
                fontFamily: "'DM Sans', sans-serif"
            },
            rotate: 0
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            stroke: {
                color: "rgba(212,35,33,0.3)",
                width: 1,
                dashArray: 4
            }
        }
    },
    yaxis: {
        min: 0,
        max: 15,
        tickAmount: 5,
        labels: {
            formatter: v => v.toFixed(0) + "%",
            style: {
                colors: [ "rgba(240,241,247,0.45)" ],
                fontSize: "11px",
                fontFamily: "'DM Sans', sans-serif"
            }
        },
        title: {
            text: "Avg. Wamd Congestion Index",
            style: {
                color: "rgba(240,241,247,0.3)",
                fontSize: "11px",
                fontFamily: "'DM Sans', sans-serif"
            }
        }
    },
    grid: {
        borderColor: "rgba(255,255,255,0.06)",
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        },
        padding: {
            top: 10,
            right: 20,
            bottom: 0,
            left: 10
        }
    },
    dataLabels: {
        enabled: true,
        formatter: v => v.toFixed(1) + "%",
        offsetY: -8,
        style: {
            fontSize: "10px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "500",
            colors: [ "rgba(240,241,247,0.8)" ]
        },
        background: {
            enabled: false
        }
    },
    tooltip: {
        theme: "dark",
        style: {
            fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif"
        },
        y: {
            formatter: v => v.toFixed(1) + "%",
            title: {
                formatter: () => "WCI: "
            }
        }
    },
    annotations: {
        xaxis: [ {
            x: "7 AM",
            x2: "8 AM",
            fillColor: "rgba(138,43,226,0.55)",
            borderColor: "rgba(138,43,226,0.9)",
            strokeDashArray: 0,
            label: {
                text: "Morning Peak",
                position: "bottom",
                offsetY: -4,
                style: {
                    color: "#fff",
                    background: "rgba(108,43,196,0.85)",
                    fontSize: "11px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "600",
                    padding: {
                        top: 5,
                        bottom: 5,
                        left: 10,
                        right: 10
                    },
                    borderRadius: 4,
                    border: 0
                }
            }
        }, {
            x: "1 PM",
            x2: "2 PM",
            fillColor: "rgba(138,43,226,0.55)",
            borderColor: "rgba(138,43,226,0.9)",
            strokeDashArray: 0,
            label: {
                text: "Mid-day Peak",
                position: "bottom",
                offsetY: -4,
                style: {
                    color: "#fff",
                    background: "rgba(108,43,196,0.85)",
                    fontSize: "11px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "600",
                    padding: {
                        top: 5,
                        bottom: 5,
                        left: 10,
                        right: 10
                    },
                    borderRadius: 4,
                    border: 0
                }
            }
        }, {
            x: "6 PM",
            x2: "7 PM",
            fillColor: "rgba(138,43,226,0.55)",
            borderColor: "rgba(138,43,226,0.9)",
            strokeDashArray: 0,
            label: {
                text: "Evening Peak",
                position: "bottom",
                offsetY: -4,
                style: {
                    color: "#fff",
                    background: "rgba(108,43,196,0.85)",
                    fontSize: "11px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "600",
                    padding: {
                        top: 5,
                        bottom: 5,
                        left: 10,
                        right: 10
                    },
                    borderRadius: 4,
                    border: 0
                }
            }
        } ]
    },
    legend: {
        show: false
    }
};

window._chartConfigs["chart-workdays"] = cfg1;

new ApexCharts(document.getElementById("chart-workdays"), cfg1).render();

const dowData = {
    Sunday: [ 6.27, 3.2, 2.38, 1.66, 1.3, 7.3, 9.23, 12.83, 11.15, 10.49, 10.68, 10.74, 10.99, 12.51, 12.45, 11.08, 11.69, 13, 13.66, 12.99, 12.26, 11.58, 10.53, 9.13 ],
    Monday: [ 6.32, 3.09, 2.29, 1.62, 1.27, 7.29, 9.12, 12.57, 11.07, 10.47, 10.63, 10.73, 11.08, 12.6, 12.3, 11.08, 11.76, 13.04, 13.75, 13.07, 12.33, 11.6, 10.58, 9.17 ],
    Tuesday: [ 6.22, 3.04, 2.32, 1.77, 1.35, 7.41, 9.17, 12.63, 10.91, 10.37, 10.59, 10.67, 11.11, 12.61, 12.26, 11.04, 11.9, 13.22, 13.99, 13.25, 12.55, 11.84, 10.72, 9.29 ],
    Wednesday: [ 6.33, 2.99, 2.31, 1.7, 1.27, 7.34, 9.08, 12.2, 10.8, 10.36, 10.7, 11, 11.52, 12.9, 12.61, 11.3, 11.8, 12.95, 13.58, 13.66, 13.57, 13.17, 11.99, 10.44 ],
    Thursday: [ 7.13, 3.48, 2.86, 2.16, 1.62, 6.93, 7.45, 7.82, 8.19, 8.3, 8.17, 8.22, 9.13, 9.07, 8.97, 9.07, 9.98, 10.95, 11.7, 12.39, 12.39, 12.05, 11.19, 9.89 ],
    Friday: [ 6.53, 3.14, 2.48, 1.91, 1.46, 7.38, 7.91, 8.25, 8.89, 9.26, 9.6, 9.8, 9.8, 9.96, 9.72, 9.94, 11.22, 12.52, 13.03, 12.86, 12.31, 11.77, 10.68, 9.32 ],
    Saturday: [ 6.22, 3.04, 2.25, 1.56, 1.24, 7.29, 9.25, 12.91, 11.19, 10.49, 10.7, 10.83, 11.19, 12.71, 12.74, 11.18, 11.64, 13.04, 13.66, 12.92, 12.08, 11.51, 10.47, 9.12 ]
};

const dowColors = {
    Sunday: "#ef4444",
    Monday: "#f59e0b",
    Tuesday: "#38bdf8",
    Wednesday: "#f0abfc",
    Thursday: "#22c55e",
    Friday: "#6366f1",
    Saturday: "#ec4899"
};

const cfg2 = {
    series: Object.entries(dowData).map(([name, data]) => ({
        name: name,
        data: data
    })),
    chart: {
        type: "line",
        height: 310,
        background: "transparent",
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        fontFamily: "'DM Sans', sans-serif",
        animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800
        }
    },
    stroke: {
        curve: "smooth",
        width: [ 2, 2, 2, 2, 2.5, 2.5, 2 ]
    },
    colors: Object.values(dowColors),
    markers: {
        size: 0,
        hover: {
            size: 4
        }
    },
    xaxis: {
        categories: hours,
        labels: {
            style: {
                colors: Array(24).fill("rgba(240,241,247,0.45)"),
                fontSize: "10px",
                fontFamily: "'DM Sans', sans-serif"
            },
            rotate: 0
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        min: 0,
        max: 15,
        tickAmount: 5,
        labels: {
            formatter: v => v.toFixed(0) + "%",
            style: {
                colors: [ "rgba(240,241,247,0.45)" ],
                fontSize: "11px",
                fontFamily: "'DM Sans', sans-serif"
            }
        }
    },
    grid: {
        borderColor: "rgba(255,255,255,0.06)",
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top: 0,
            right: 16,
            bottom: 0,
            left: 10
        }
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: "'DM Sans', sans-serif"
        },
        y: {
            formatter: v => v.toFixed(1) + "%"
        },
        shared: true
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        offsetY: 4,
        labels: {
            colors: "rgba(240,241,247,0.7)"
        },
        markers: {
            width: 10,
            height: 10,
            radius: 50,
            offsetX: -3
        },
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "12px",
        itemMargin: {
            horizontal: 12
        }
    }
};

window._chartConfigs["chart-dayofweek"] = cfg2;

new ApexCharts(document.getElementById("chart-dayofweek"), cfg2).render();

const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

const monthlyVals = [ 14.56, 14.68, 12.73, 11.76, 13.31, 11.02, 10.51, 10.91, 14.46, 14.16, 14.34, 12.85 ];

const monthColors = monthlyVals.map((v, i) => {
    if (i === 1) return "#D42321";
    if (i === 6) return "#22c55e";
    return "#38bdf8";
});

const cfg3 = {
    series: [ {
        name: "Avg. WCI Peak Hours",
        data: monthlyVals
    } ],
    chart: {
        type: "bar",
        height: 340,
        background: "transparent",
        toolbar: {
            show: false
        },
        fontFamily: "'DM Sans', sans-serif",
        animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            dynamicAnimation: {
                enabled: true,
                speed: 800
            }
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: "62%",
            distributed: true,
            dataLabels: {
                position: "top"
            }
        }
    },
    colors: monthColors,
    dataLabels: {
        enabled: true,
        formatter: v => v.toFixed(1) + "%",
        offsetY: -24,
        style: {
            fontSize: "11px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "700",
            colors: monthlyVals.map((_, i) => i === 1 ? "#D42321" : i === 6 ? "#22c55e" : "rgba(240,241,247,0.8)")
        },
        background: {
            enabled: false
        }
    },
    xaxis: {
        categories: months,
        labels: {
            style: {
                colors: Array(12).fill("rgba(240,241,247,0.5)"),
                fontSize: "12px",
                fontFamily: "'DM Sans', sans-serif"
            }
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        min: 0,
        max: 17,
        tickAmount: 4,
        labels: {
            formatter: v => v.toFixed(0) + "%",
            style: {
                colors: [ "rgba(240,241,247,0.45)" ],
                fontSize: "11px",
                fontFamily: "'DM Sans', sans-serif"
            }
        }
    },
    grid: {
        borderColor: "rgba(255,255,255,0.06)",
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top: 16,
            right: 10,
            bottom: 0,
            left: 10
        }
    },
    tooltip: {
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: "'DM Sans', sans-serif"
        },
        y: {
            formatter: v => v.toFixed(2) + "%",
            title: {
                formatter: () => "WCI: "
            }
        }
    },
    states: {
        hover: {
            filter: {
                type: "lighten",
                value: .1
            }
        },
        active: {
            filter: {
                type: "none"
            }
        }
    },
    legend: {
        show: false
    }
};

window._chartConfigs["chart-monthly"] = cfg3;

const monthlyChart = new ApexCharts(document.getElementById("chart-monthly"), cfg3);

monthlyChart.render();

const wastedYears = [ 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 ];

const wastedHours = [ 102, 109, 108, 98, 92, 38, 22, 30, 37, 37 ];

const wastedColors = wastedHours.map((v, i) => {
    if (i <= 3) return "#ef4444";
    if (i === 4) return "#f97316";
    return "#22c55e";
});

function renderWastedChart() {
    const statsCol = document.querySelector(".impact-stats");
    const chartCard = document.querySelector("#chart-wasted").closest(".c-block-l");
    const targetH = statsCol ? statsCol.offsetHeight : 420;
    if (chartCard) {
        chartCard.style.height = targetH + "px";
    }
    const innerH = Math.max(targetH - 60, 260);
    new ApexCharts(document.getElementById("chart-wasted"), {
        series: [ {
            name: "Hours Wasted",
            data: wastedHours
        } ],
        chart: {
            type: "bar",
            height: innerH,
            background: "transparent",
            toolbar: {
                show: false
            },
            fontFamily: "'DM Sans', sans-serif",
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 900
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: "58%",
                distributed: true,
                dataLabels: {
                    position: "top"
                }
            }
        },
        colors: wastedColors,
        dataLabels: {
            enabled: true,
            formatter: v => v,
            offsetY: -20,
            style: {
                fontSize: "12px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: "700",
                colors: [ "rgba(15,18,33,0.8)" ]
            },
            background: {
                enabled: false
            }
        },
        xaxis: {
            categories: wastedYears.map(String),
            labels: {
                style: {
                    colors: Array(10).fill("#8b90a7"),
                    fontSize: "12px",
                    fontFamily: "'DM Sans', sans-serif"
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            min: 0,
            max: 120,
            tickAmount: 4,
            labels: {
                formatter: v => v + " h",
                style: {
                    colors: [ "#8b90a7" ],
                    fontSize: "11px",
                    fontFamily: "'DM Sans', sans-serif"
                }
            },
            title: {
                text: "Hours / commuter / year",
                style: {
                    color: "#8b90a7",
                    fontSize: "11px",
                    fontFamily: "'DM Sans', sans-serif"
                }
            }
        },
        grid: {
            borderColor: "rgba(15,18,33,0.07)",
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 10,
                right: 10,
                bottom: 0,
                left: 10
            }
        },
        tooltip: {
            theme: "light",
            style: {
                fontSize: "12px",
                fontFamily: "'DM Sans', sans-serif"
            },
            y: {
                formatter: v => v + " hrs",
                title: {
                    formatter: () => "Wasted: "
                }
            }
        },
        legend: {
            show: false
        }
    }).render();
}

if (document.readyState === "complete") {
    requestAnimationFrame(() => requestAnimationFrame(renderWastedChart));
} else {
    window.addEventListener("load", () => requestAnimationFrame(() => requestAnimationFrame(renderWastedChart)));
}
window._chartConfigs = {};

const mci = [ 5.96, 2.82, 2.64, 3.96, 6.87, 9.52, 9.72, 11.68, 11.21, 11.06, 11.68, 11.74, 11.65, 12.79, 13.27, 12.95, 12.64, 12.97, 12.88, 12.53, 11.88, 11.35, 10.37, 9.01 ];

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
            x: "2 PM",
            x2: "3 PM",
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
            x: "5 PM",
            x2: "6 PM",
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
    Sunday: [ 5.86, 2.58, 2.39, 3.76, 6.89, 9.58, 9.73, 11.71, 11.22, 10.95, 11.57, 11.69, 11.52, 12.7, 13.27, 12.87, 12.35, 12.61, 12.58, 12.16, 11.39, 10.84, 9.95, 8.72 ],
    Monday: [ 5.72, 2.55, 2.33, 3.87, 7.04, 9.62, 9.72, 11.74, 11.23, 11.1, 11.62, 11.72, 11.57, 12.74, 13.21, 12.96, 12.51, 12.82, 12.77, 12.3, 11.63, 10.97, 10.04, 8.75 ],
    Tuesday: [ 5.79, 2.57, 2.45, 3.77, 6.66, 9.97, 10.07, 11.8, 11.18, 10.97, 11.55, 11.52, 11.47, 12.68, 13.15, 12.79, 12.45, 12.71, 12.67, 12.3, 11.53, 10.98, 10.03, 8.62 ],
    Wednesday: [ 5.71, 2.57, 2.48, 3.76, 6.69, 9.41, 9.61, 11.62, 11.2, 11.06, 11.65, 11.75, 11.53, 12.74, 13.34, 13.08, 12.79, 13.12, 13.05, 12.58, 11.77, 11.28, 10.3, 8.88 ],
    Thursday: [ 5.89, 2.74, 2.45, 3.59, 6.13, 9.15, 9.52, 11.42, 11.12, 11.15, 11.87, 11.9, 12.01, 12.93, 13.21, 12.87, 12.94, 13.35, 13.13, 13.1, 12.91, 12.51, 11.36, 9.98 ],
    Friday: [ 6.83, 3.2, 2.58, 2.28, 2.03, 7.54, 7.71, 7.81, 8.05, 8.58, 8.46, 8.5, 9.18, 9.68, 9.93, 10.43, 11.01, 11.57, 11.53, 12.06, 11.77, 11.41, 10.52, 9.41 ],
    Saturday: [ 6.29, 2.82, 2.53, 2.22, 2.37, 8.24, 8.52, 8.86, 9.22, 9.56, 9.8, 9.9, 10.02, 10.75, 11.19, 11.68, 12.13, 12.48, 12.13, 11.99, 11.4, 10.98, 10.04, 8.79 ]
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

const monthlyVals = [ 14.01, 14.43, 10.67, 12.65, 13.23, 11.11, 10.51, 11, 12.74, 12.16, 12.24, 12.73 ];

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

const wastedYears = [ 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025 ];

const wastedHours = [ 102, 109, 108, 98, 92, 38, 22, 30, 37, 37, 38 ];

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
    requestAnimation(() => requestAnimationFrame(renderWastedChart));
} else {
    window.addEventListener("load", () => requestAnimationFrame(() => requestAnimationFrame(renderWastedChart)));
}
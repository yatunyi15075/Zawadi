import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.div`
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

const Analytics= () => {
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        const labels = ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'];
        const values = [1000, 90, 80, 70];

        const ctx = chartRef.current.getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Analytics Data',
                    data: values,
                    backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []);

    return (
        <Container>
           <Sidebar />
            <SectionTitle>Analytics</SectionTitle>
            <canvas ref={chartRef}></canvas>
        </Container>
    );
}


export default Analytics

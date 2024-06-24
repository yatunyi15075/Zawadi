import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.div`
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
    margin-bottom: 20px;
`;

const Button = styled.button`
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;

const Analytics = () => {
    const chartRef = useRef(null);
    const [selectedSection, setSelectedSection] = useState('Early Years');
    const [myChart, setMyChart] = useState(null);

    const getChartData = (section) => {
        switch (section) {
            case 'Early Years':
                return {
                    labels: ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'],
                    values: [500, 95, 85, 75, 80]
                };
            case 'Middle School':
                return {
                    labels: ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'],
                    values: [300, 90, 80, 70, 75]
                };
            case 'Junior Secondary':
                return {
                    labels: ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'],
                    values: [200, 85, 75, 65, 70]
                };
            default:
                return {
                    labels: [],
                    values: []
                };
        }
    };

    useEffect(() => {
        const { labels, values } = getChartData(selectedSection);

        const ctx = chartRef.current.getContext('2d');
        if (myChart) {
            myChart.destroy();
        }
        const newChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: `${selectedSection} Analytics Data`,
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

        setMyChart(newChart);

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (newChart) {
                newChart.destroy();
            }
        };
    }, [selectedSection]);

    return (
        <Container>
            <Sidebar />
            <SectionTitle>Analytics</SectionTitle>
            <ButtonGroup>
                <Button onClick={() => setSelectedSection('Early Years')}>Early Years</Button>
                <Button onClick={() => setSelectedSection('Middle School')}>Middle School</Button>
                <Button onClick={() => setSelectedSection('Junior Secondary')}>Junior Secondary</Button>
            </ButtonGroup>
            <h3>{selectedSection} Analytics</h3>
            <canvas ref={chartRef}></canvas>
        </Container>
    );
}

export default Analytics;

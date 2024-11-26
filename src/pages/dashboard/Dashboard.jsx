import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Input from '../../components/shared/Input/Input';
import './Dashboard.scss';

const Dashboard = () => {
  const [epkStats, setEpkStats] = useState({
    totalEPKs: 0,
    activeProjects: 0,
    completedProjects: 0,
    recentActivity: []
  });

  const [filters, setFilters] = useState({
    search: '',
    projectStatus: '',
    dateRange: '',
    artistName: '',
    genre: ''
  });

  // Chart for EPK Progress
  const epkProgressChart = {
    series: [75],
    options: {
      chart: {
        height: 180,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -115,
          endAngle: 115,
          hollow: {
            size: '80%',
          },
          track: {
            background: 'rgba(0, 0, 0, 0.1)',
            strokeWidth: '67%',
          },
          dataLabels: {
            value: {
              offsetY: 10,
              color: '#111',
              fontSize: '24px',
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          gradientToColors: ['#ffd200'],
          stops: [0, 100]
        }
      },
      colors: ["#ee0979"],
    }
  };

  // Chart for Monthly EPK Creation
  const monthlyEPKChart = {
    series: [{
      name: "EPKs Created",
      data: [4, 10, 15, 12, 25, 18, 30, 22, 17]
    }],
    options: {
      chart: {
        height: 105,
        type: 'area',
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.0,
        }
      },
      colors: ["#02c27a"]
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>EPK Generator Dashboard</h1>
        <div className="header-actions">
          <Input 
            type="search"
            name="search"
            placeholder="Search EPKs..."
            value={filters.search}
            onChange={(e) => setFilters(prev => ({...prev, search: e.target.value}))}
            className="dashboard-search"
            icon="🔍"
          />
        </div>
      </div>

      <div className="dashboard-filters">
        <Input 
          type="select"
          name="projectStatus"
          label="Project Status"
          value={filters.projectStatus}
          onChange={(e) => setFilters(prev => ({...prev, projectStatus: e.target.value}))}
          options={[
            { value: 'all', label: 'All Projects' },
            { value: 'draft', label: 'Drafts' },
            { value: 'active', label: 'Active' },
            { value: 'completed', label: 'Completed' }
          ]}
          className="filter-select"
        />
        
        <Input 
          type="text"
          name="artistName"
          label="Artist Name"
          value={filters.artistName}
          onChange={(e) => setFilters(prev => ({...prev, artistName: e.target.value}))}
          placeholder="Filter by artist..."
          className="filter-input"
        />

        <Input 
          type="select"
          name="genre"
          label="Genre"
          value={filters.genre}
          onChange={(e) => setFilters(prev => ({...prev, genre: e.target.value}))}
          options={[
            { value: 'all', label: 'All Genres' },
            { value: 'rock', label: 'Rock' },
            { value: 'pop', label: 'Pop' },
            { value: 'hiphop', label: 'Hip Hop' },
            { value: 'electronic', label: 'Electronic' }
          ]}
          className="filter-select"
        />
      </div>

      <div className="dashboard-grid">
        <div className="stats-card">
          <div className="card-content">
            <h3>EPK Completion Rate</h3>
            <ReactApexChart
              options={epkProgressChart.options}
              series={epkProgressChart.series}
              type="radialBar"
              height={180}
            />
          </div>
        </div>

        <div className="stats-card">
          <div className="card-content">
            <h3>Monthly EPK Creation</h3>
            <ReactApexChart
              options={monthlyEPKChart.options}
              series={monthlyEPKChart.series}
              type="area"
              height={105}
            />
          </div>
        </div>

        <div className="stats-card">
          <div className="card-content">
            <h3>Active Projects</h3>
            <div className="stat-value">{epkStats.activeProjects}</div>
            <div className="stat-change positive">+5 this week</div>
          </div>
        </div>

        <div className="stats-card">
          <div className="card-content">
            <h3>Completed EPKs</h3>
            <div className="stat-value">{epkStats.completedProjects}</div>
            <div className="stat-change">+3 this month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

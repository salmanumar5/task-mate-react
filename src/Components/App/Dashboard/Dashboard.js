import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { HitApi } from '../../../Utils/ApiCall';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  const groupReducer = useSelector((state) => state.groupReducer);

  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Fetch data for the line chart
    const fetchCompletionStats = async () => {
      try {
        const result = await HitApi({}, 'https://task-mate-backend.onrender.com/api/tasks/getStats/', 'POST'); // Replace with your API endpoint
        if (result && Array.isArray(result)) {
          const formattedData = result.map((stat) => ({
            day: new Date(stat.date).toLocaleDateString('en-US', { weekday: 'short' }),
            tasks: stat.count,
          }));
          setLineChartData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching completion stats:', error);
      }
    };
    console.log(lineChartData);
    

    // Fetch data for the pie chart
    const fetchTaskDistribution = async () => {
      try {
        const result = await HitApi({}, 'https://task-mate-backend.onrender.com/api/tasks/task-distribution', 'GET'); // Replace with your API endpoint
        console.log(result);
        
        if (result) {
          const pieData = [
            { name: 'Tasks completed by you', value: result.completedByYou || 0 },
            { name: 'Tasks left', value: result.left || 0 },
            { name: 'Tasks completed by others', value: result.completedByOthers || 0 },
          ];
          setPieChartData(pieData);
        }
      } catch (error) {
        console.error('Error fetching task distribution:', error);
      }
    };

    // Fetch data for recent activities
    const fetchRecentActivities = async () => {
      try {
        const result = await HitApi({}, '/api/stats/recent-activities', 'GET'); // Replace with your API endpoint
        if (result && Array.isArray(result)) {
          setRecentActivities(result);
        }
      } catch (error) {
        console.error('Error fetching recent activities:', error);
      }
    };

    fetchCompletionStats();
    fetchTaskDistribution();
    fetchRecentActivities();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-100 shadow-lg">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Hey User,</h1>
      </header>

      <section className="mb-8 border bg-white border-black p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Tasks Completed Over Days</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="tasks" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <div className="flex flex-col md:flex-row gap-8 ">
        <section className="md:w-2/3 border bg-white border-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Activity</h2>
          <ul className="space-y-2">
            {recentActivities.map((activity, index) => (
              <li key={index} className="bg-white p-3 rounded shadow text-gray-600">
                {activity.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="md:w-1/3 border bg-white border-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Task Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

// Dummy data for the line chart
const lineChartData = [
  { day: 'Mon', tasks: 4 },
  { day: 'Tue', tasks: 3 },
  { day: 'Wed', tasks: 5 },
  { day: 'Thu', tasks: 2 },
  { day: 'Fri', tasks: 6 },
  { day: 'Sat', tasks: 3 },
  { day: 'Sun', tasks: 4 },
];

// Dummy data for the pie chart
const pieChartData = [
  { name: 'Tasks completed by you', value: 30 },
  { name: 'Tasks left', value: 45 },
  { name: 'Tasks completed by others', value: 25 },
];

// Dummy data for recent activities
const recentActivities = [
  { id: 1, text: 'You created a new task: "Finish project proposal"' },
  { id: 2, text: 'You completed the task: "Send weekly report"' },
  { id: 3, text: 'You joined the group: "Marketing Team"' },
  { id: 4, text: 'You created a new task: "Schedule team meeting"' },
  { id: 5, text: 'You completed the task: "Review client feedback"' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  const groupReducer = useSelector((state) => state.groupReducer);

  console.log("Group Reducer", groupReducer);
  

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-100 shadow-lg">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Hey User,</h1>
      </header>

      <section className="mb-8">
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

      <div className="flex flex-col md:flex-row gap-8">
        <section className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Activity</h2>
          <ul className="space-y-2">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="bg-white p-3 rounded shadow text-gray-600">
                {activity.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="md:w-1/3">
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
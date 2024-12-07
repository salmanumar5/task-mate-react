const groups = [
    {
      _id: { $oid: "66bfcfdeab1aab9c5251a19e" },
      name: "Test Group 1",
      description: "This is the test group",
      host: { $oid: "66bfccb0e4887629d8479ddb" },
      members: [
        { $oid: "66bfccb0e4887629d8479ddb" },
        { $oid: "66c34021ceba4be20075a153" },
      ],
      tasks: [
        {
          _id: { $oid: "66c341a8ceba4be20075a159" },
          title: "Test Task 1",
          description: "This is the first Task",
          group: { $oid: "66bfcfdeab1aab9c5251a19e" },
          priority: 1,
          status: "Pending",
          completedUsers: [{ $oid: "66c34021ceba4be20075a153" }],
          resources: ["filee.sse442"],
          comments: [],
          __v: 2,
        },
        {
          _id: { $oid: "66c341c6ceba4be20075a15d" },
          title: "Test Task 2",
          description: "This is the second Task",
          group: { $oid: "66bfcfdeab1aab9c5251a19e" },
          priority: 2,
          status: "Pending",
          completedUsers: [],
          resources: ["fileb.ssx654"],
          comments: [],
          __v: 2,
        },
        {
          _id: { $oid: "66c341d5ceba4be20075a161" },
          title: "Test Task 3",
          description: "This is the third Task",
          group: { $oid: "66bfcfdeab1aab9c5251a19e" },
          priority: 3,
          status: "In Progress",
          completedUsers: [{ $oid: "66bfccb0e4887629d8479ddb" }],
          resources: ["filec.ssx332"],
          comments: [],
          __v: 2,
        },
        {
          _id: { $oid: "66c34238ceba4be20075a165" },
          title: "Test Task 4",
          description: "This is the fourth Task",
          group: { $oid: "66bfcfdeab1aab9c5251a19e" },
          priority: 4,
          status: "Completed",
          completedUsers: [
            { $oid: "66bfccb0e4887629d8479ddb" },
            { $oid: "66c34021ceba4be20075a153" },
          ],
          resources: ["filed.ssx121"],
          comments: [],
          __v: 2,
        },
      ],
      groupId: "3808",
      __v: 7,
    },
    {
      _id: { $oid: "66cfcfdeab1aab9c5251a19f" },
      name: "Test Group 2",
      description: "This is the second test group",
      host: { $oid: "66bfccb0e4887629d8479ddc" },
      members: [
        { $oid: "66bfccb0e4887629d8479ddc" },
        { $oid: "66c34021ceba4be20075a154" },
      ],
      tasks: [
        {
          _id: { $oid: "66c342a8ceba4be20075a169" },
          title: "Test Task 5",
          description: "This is the fifth Task",
          group: { $oid: "66cfcfdeab1aab9c5251a19f" },
          priority: 2,
          status: "Pending",
          completedUsers: [],
          resources: ["filee.sse555"],
          comments: [],
          __v: 2,
        },
        {
          _id: { $oid: "66c342c6ceba4be20075a16d" },
          title: "Test Task 6",
          description: "This is the sixth Task",
          group: { $oid: "66cfcfdeab1aab9c5251a19f" },
          priority: 3,
          status: "Pending",
          completedUsers: [],
          resources: ["filef.ssx756"],
          comments: [],
          __v: 2,
        },
      ],
      groupId: "3812",
      __v: 5,
    },
    // Add more groups as needed
  ];
  
  const users = [
    {
      _id: { $oid: "66bfccb0e4887629d8479ddb" },
      name: "John Doe",
      email: "johnDoe1@gmail.com",
      password: "$2b$10$YPEYHzwzB5NZ0.M/nhwJI.CppanKiapTogbByidibiCa.mzhM7Wg2",
    },
    {
      _id: { $oid: "66c34021ceba4be20075a153" },
      name: "Jane Smith",
      email: "janeSmith@gmail.com",
      password: "$2b$10$YPEYHzwzB5NZ0.M/nhwJI.CppanKiapTogbByidibiCa.mzhM7Wg3",
    },
    // Add more users as needed
  ];
  
  console.log(groups);
  console.log(users);
  
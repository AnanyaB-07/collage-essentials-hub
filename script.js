function openModule(module) {
  const output = document.getElementById("module-output");
  switch (module) {
    case "planner":
      output.innerHTML = `
        <h2>📅 Smart Planner</h2>
        <input type="text" placeholder="Add task..." />
        <button>Add</button>
        <p>(This will sync with Google Calendar in future versions)</p>
      `;
      break;
    case "budget":
      output.innerHTML = `
        <h2>💸 Budget Tracker</h2>
        <input type="number" placeholder="Enter amount" />
        <select>
          <option>Food</option>
          <option>Books</option>
          <option>Transport</option>
        </select>
        <button>Track</button>
        <p>(Spending chart coming soon!)</p>
      `;
      break;
    case "library":
      output.innerHTML = `
        <h2>📚 Library Access</h2>
        <input type="text" placeholder="Search books..." />
        <button>Search</button>
        <ul>
          <li>🔍 Introduction to AI – Available</li>
          <li>🔍 Data Structures – Checked Out</li>
        </ul>
      `;
      break;
    case "resources":
      output.innerHTML = `
        <h2>🗺️ Resource Locator</h2>
        <p><a href="https://maps.google.com" target="_blank">Open Campus Map</a></p>
      `;
      break;
    case "connect":
      output.innerHTML = `
        <h2>🤝 Peer Connect</h2>
        <p>Join study groups, clubs, and events.</p>
        <p>Coming soon: Chat and RSVP features!</p>
      `;
      break;
  }
}

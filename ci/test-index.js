const fs = require("fs");
try {
  const data = fs.readFileSync("index.html", "utf8");
  if (data.includes("Sorting") || data.includes("Visualizer")) {
    console.log("✅ TEST PASS: index.html contains 'Sorting' text");
    process.exit(0);
  } else {
    console.error("❌ TEST FAIL: index.html missing keyword");
    process.exit(1);
  }
} catch (err) {
  console.error("❌ TEST ERROR: " + err.message);
  process.exit(1);
}

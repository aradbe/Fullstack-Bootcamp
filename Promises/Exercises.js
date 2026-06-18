//Exercise 1

function checkLuckyNumber(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else {
        resolve("Not lucky");
      }
    }, 800);
  });
}

//Exercise 2

function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

const startTime = Date.now();

const promises = files.map(function (file) {
  return processFile(file.name, file.time);
});

Promise.all(promises)
  .then(function (results) {
    const totalTime = Date.now() - startTime;

    console.log("All files processed!");
    console.log("Total processing time:", totalTime, "ms");
    console.log("Results:");
    console.log(results);
  })
  .catch(function (error) {
    console.log("Processing failed:");
    console.log(error.message);
  });

//Exercise 3

const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 },
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of items) {
        if (!inventory[item]) {
          reject(new Error(`${item} does not exist`));
          return;
        }

        if (inventory[item].stock <= 0) {
          reject(new Error(`${item} is out of stock`));
          return;
        }
      }

      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let subtotal = 0;

      for (let item of items) {
        subtotal += inventory[item].price;
      }

      const tax = subtotal * 0.08;
      const total = subtotal + tax;

      resolve({
        subtotal: subtotal,
        tax: tax,
        total: total,
      });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({
          transactionId: Math.floor(Math.random() * 1000000),
          amount: amount,
          status: "success",
        });
      } else {
        reject(new Error("Payment failed"));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let item of items) {
        inventory[item].stock--;
      }

      resolve(inventory);
    }, 300);
  });
}

function checkout(itemNames) {
  let totalData;

  return checkInventory(itemNames)
    .then((items) => {
      return calculateTotal(items);
    })
    .then((total) => {
      totalData = total;
      return processPayment(total.total);
    })
    .then((payment) => {
      return updateInventory(itemNames).then((updatedInventory) => {
        return {
          items: itemNames,
          total: totalData,
          payment: payment,
          inventory: updatedInventory,
        };
      });
    });
}

checkout(["laptop", "mouse"])
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"])
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"])
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));


    let isMetric = true;

    function toggleUnits() {
      isMetric = document.getElementById('unitSwitch').checked;
      document.getElementById('metricHeight').style.display = isMetric ? 'flex' : 'none';
      document.getElementById('imperialHeight').style.display = isMetric ? 'none' : 'flex';
      document.getElementById('weight').placeholder = isMetric ? 'kg' : 'lbs';
    }

    function calculateBMI() {
      let height, weight;
      const resultDiv = document.getElementById('bmiResult');

      weight = parseFloat(document.getElementById('weight').value);
      if (isMetric) {
        height = parseFloat(document.getElementById('heightCm').value) / 100;
      } else {
        const ft = parseFloat(document.getElementById('heightFt').value);
        const inch = parseFloat(document.getElementById('heightIn').value);
        height = ((ft * 12) + inch) * 0.0254;
      }

      if (!height || !weight || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = `<p>Please enter valid height and weight</p>`;
        return;
      }

      const bmi = weight / (height * height);
      const rounded = bmi.toFixed(1);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24.9) category = 'Normal Weight';
      else if (bmi < 29.9) category = 'Overweight';
      else category = 'Obese';

      resultDiv.innerHTML = `
        <h3>Your BMI Result</h3>
        <div class="value">${rounded}</div>
        <div><span class="badge">${category}</span></div>
        <p>You have a ${category.toLowerCase()}.</p>
        <div class="bmi-scale">
          <div class="under"></div>
          <div class="normal"></div>
          <div class="over"></div>
          <div class="obese"></div>
        </div>
        <div class="bmi-labels">
          <span>Underweight</span>
          <span>Normal</span>
          <span>Overweight</span>
          <span>Obese</span>
        </div>
      `;
    }

    function resetForm() {
      document.getElementById('heightCm').value = '';
      document.getElementById('heightFt').value = '';
      document.getElementById('heightIn').value = '';
      document.getElementById('weight').value = '';
      document.getElementById('bmiResult').innerHTML = '';
    }
  
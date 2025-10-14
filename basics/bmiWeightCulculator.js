
      const form = document.querySelector("form");
	  form.addEventListener("submit",function(e){
	  e.preventDefault();
	  
	  const height = parseInt(document.querySelector("#height").value);
	  const weight = parseInt(document.querySelector("#weight").value);
	  const result = document.querySelector("#result");
	  
	  if(height === '' || height < 0 || isNaN(height)){
	  result.innerHTML = `please give a valid height ${height}`;
	  }else if(weight === '' || weight < 0 || isNaN(weight)){
	  result.innerHTML = `please give a valid weight ${weight}`
	  }else{
	  
	  const bmi = (weight / ((height*height) / 10000));
	  
	  result.innerHTML = `<span>${bmi}</span>`;
	  
	  
	  
	  
	  
	  }
	  });
	  
// End of bmiWeightCulculator.js
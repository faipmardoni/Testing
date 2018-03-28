function hitungHuruf(kata) {
	let array = kata.split(' ');

	var muchDuplicate = function(str) {
		let table = {};
		for (let i of str) {
			if (table[i] === undefined) {
				table[i] = 1;
			} else {
				table[i] += 1;
			}
		}
		let counter = 0;
		for (let i in table) {
			if (table[i] >= 2) {
				counter++;
			}
		}
		return counter;
	}
	let max = -999;
	let result;

	for (let i = array.length - 1; i >= 0; i--) {
	//   console.log(muchDuplicate(array[i]))
		if (muchDuplicate(array[i]) >= max) {
			max = muchDuplicate(array[i])
			result = array[i];
		}
	}
	return result;
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
  console.log(hitungHuruf('jika ada saatnya menjadi perubahannya')); // danau
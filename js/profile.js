data = {
	"entries": [{
		"name": "Ford",
		"age": "27",
		"gender": "M",
		"location": "New York",
		"incomeLevel": "High"
	}, {
		"name": "John",
		"age": "27",
		"gender": "M",
		"location": "Bangalore",
		"incomeLevel": "Low"
	}, {
		"name": "Sarah",
		"age": "28",
		"gender": "F",
		"location": "New York",
		"incomeLevel": "High"
	}, {
		"name": "Ritz",
		"age": "28",
		"gender": "M",
		"location": "Bangalore",
		"incomeLevel": "Medium"
	}, {
		"name": "Fordeus",
		"age": "29",
		"gender": "M",
		"location": "Bangok",
		"incomeLevel": "Low"
	}, {
		"name": "Cupper",
		"age": "29",
		"gender": "F",
		"location": "New York",
		"incomeLevel": "High"
	}, {
		"name": "Lead",
		"age": "30",
		"gender": "F",
		"location": "Bangok",
		"incomeLevel": "Medium"
	}, {
		"name": "Mari",
		"age": "25",
		"gender": "F",
		"location": "Bangalore",
		"incomeLevel": "Low"
	}, {
		"name": "Andy",
		"age": "27",
		"gender": "M",
		"location": "New York",
		"incomeLevel": "Medium"
	}, {
		"name": "Farko",
		"age": "25",
		"gender": "M",
		"location": "Bangok",
		"incomeLevel": "Low"
	}, {
		"name": "Feus",
		"age": "25",
		"gender": "F",
		"location": "Bangalore",
		"incomeLevel": "High"
	}, {
		"name": "Armade",
		"age": "20",
		"gender": "F",
		"location": "Shangahi",
		"incomeLevel": "Medium"
	}, {
		"name": "Caty",
		"age": "28",
		"gender": "F",
		"location": "Japan",
		"incomeLevel": "Medium"
	}, {
		"name": "Uthy",
		"age": "29",
		"gender": "F",
		"location": "New York",
		"incomeLevel": "High"
	}, {
		"name": "Margo",
		"age": "32",
		"gender": "M",
		"location": "Phily",
		"incomeLevel": "Low"
	}, {
		"name": "Scion",
		"age": "30",
		"gender": "M",
		"location": "Bangalore",
		"incomeLevel": "Medium"
	}, {
		"name": "Naru",
		"age": "25",
		"gender": "M",
		"location": "Delhi",
		"incomeLevel": "Low"
	}, {
		"name": "Hassan",
		"age": "21",
		"gender": "M",
		"location": "Shangai",
		"incomeLevel": "High"
	}, {
		"name": "Gulpy",
		"age": "20",
		"gender": "F",
		"location": "New York",
		"incomeLevel": "Medium"
	}, ]
};
list = [];

function registerDomEvents() {
	$('.searchBtn').on('click', search);
	$('.graphs').hide();
	$('.tab2').on('click', function() {
		$('.tableCntr').hide();
		$('.graphs').show();
		$('.tab2').css('border-bottom', '1px solid black');
		$('.tab1').css('border-bottom', '0px solid #ccc');
	});
	$('.tab1').on('click', function() {
		$('.tableCntr').show();
		$('.graphs').hide();
		$('.tab1').css('border-bottom', '1px solid black');
		$('.tab2').css('border-bottom', '0px solid #ccc');
	});
}

function graphs1() {
	var High = 0,
		low = 0,
		med = 0;
	for (var i = 0; i < list.length; i++) {
		if (list[i].incomeLevel == "High") High++;
		else if (list[i].incomeLevel == "Medium") med++;
		else low++;
	}
	High = High / 19 * 100;
	low = low / 19 * 100;
	console.log(low);
	med = med / 19 * 100;
	graphs = '<ul class="chart" style="text-align:center;border-bottom:1px solid #ccc">\
				<li class="bar teal" style="height:' + High + '%;" title="' + High + '">\
			<div class="skill">High</div></li>\
				<li class="bar salmon" style="height: ' + med + '%;" title="' + med + '">\
			<div class="skill">Medium</div></li>\
			<li class="bar peach" style="height: ' + low + '%;" title="' + low + '">\
			<div class="skill ">Low</div></li>\
				<li class="bar random" style="height: ' + low + '%;width:3px;" title="' + low + '">\
			<div class="skill"></div></li>\
			</ul>';
	$('.graphs').text('');
	$('.graphs').append(graphs);
	var temp = 0;
	if (High <= 0) {
		temp = 1;
		$('.teal').css('height', '100%');
		$('.teal').css('border', '1px solid #f0f0e0');
		$('.teal').css('background', '#f0f0e0');
	}
	if (med <= 0) {
		temp = 1;
		$('.salmon').css('height', '100%');
		$('.salmon').css('border', '1px solid #f0f0e0');
		$('.salmon').css('background', '#f0f0e0');
	}
	if (low <= 0) {
		temp = 1;
		$('.peach').css('height', '100%');
		$('.peach').css('border', '1px solid #f0f0e0');
		$('.peach').css('background', '#f0f0e0');
	}
	if (temp == 0) $('.random').css('height', '100%');
}

function search() {
	//make Call to server with parameters but here I am implementing it since derth of time for server implementation
	var text = $('.searchText').val().toLowerCase();
	console.log(text);
	searchEntries = data.entries;
	list = [];
	for (i = 0; i < searchEntries.length; i++) {
		console.log(searchEntries[i].name);
		if (text == searchEntries[i].name.toLowerCase() || text == searchEntries[i].age.toLowerCase() || text == searchEntries[i].gender.toLowerCase() || text == searchEntries[i].location.toLowerCase() || text == searchEntries[i].incomeLevel.toLowerCase()) list.push(searchEntries[i]);
	}
	if (list.length != 0) {
		generateTable(list);
		graphs1();
	} else {
		$('.graphs').html('');
		$('.infoTable').text('No Items Match your Text! Please Try Again!');
	}
}

function generateTable(data1) {
	console.log(data1);
	$('.infoTable').text('');
	$('.infoTable').append('<button style="border-radius:5px"><span class="glyphicon glyphicon-export"></span><a href="#" onclick="downloadCSV();">Download CSV</a></button><br><br>');
	header = '<tr>\
		<th>Name</th>\
		<th>Age</th>\
		<th>Gender</th>\
		<th>Location</th>\
		<th>Income Level</th>\
		</tr>';
	$('.infoTable').append(header);
	for (var i = 0; i < data1.length; i++) {
		s = '<tr>\
	<td>' + data1[i].name + '</td>\
	<td>' + data1[i].age + '</td>\
	<td>' + data1[i].gender + '</td>\
	<td>' + data1[i].location + '</td>\
	<td>' + data1[i].incomeLevel + '</td>\
	</tr>';
		$('.infoTable').append(s);
	}
}

function convertArrayOfObjectsToCSV(args) {
	var result, ctr, keys, columnDelimiter, lineDelimiter, data;
	data = args.data || null;
	if (data == null || !data.length) {
		return null;
	}
	columnDelimiter = args.columnDelimiter || ',';
	lineDelimiter = args.lineDelimiter || '\n';
	keys = Object.keys(data[0]);
	result = '';
	result += keys.join(columnDelimiter);
	result += lineDelimiter;
	data.forEach(function(item) {
		ctr = 0;
		keys.forEach(function(key) {
			if (ctr > 0) result += columnDelimiter;
			result += item[key];
			ctr++;
		});
		result += lineDelimiter;
	});
	return result;
}

function downloadCSV() {
	alert('Please wait for your CSV file to get generated, else please double click');
	var args = "profiles.csv";
	var data, filename, link;
	var csv = convertArrayOfObjectsToCSV({
		data: list
	});
	if (csv == null) return;
	filename = args.filename || 'export.csv';
	if (!csv.match(/^data:text\/csv/i)) {
		csv = 'data:text/csv;charset=utf-8,' + csv;
	}
	data = encodeURI(csv);
	link = document.createElement('a');
	link.setAttribute('href', data);
	link.setAttribute('download', filename);
	link.click();
}
import Papa from 'papaparse';

export const updateScript = (file: string) => {
    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        step: function(row:any) {
		console.log("Row:", row.data);
        for(let fellow of row) {

        }
	},
        complete: function() {
            console.log("All done!");
	}});
}


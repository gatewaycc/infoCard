#target illustrator
function RenameArtFromText(){
	if(app.documents.length > 0 && app.documents[0].selection.length){
		function getTextFile(){
        var fileType = ($.os.match("Windows"))? "*.txt;*.csv;": function(f){return f instanceof Folder || (f instanceof File && f.displayName.match(/(\.txt|\.csv)$/i));} ;
        var textFile = File.openDialog("Choose a text file.", fileType);
      	if(textFile != null){
      		return textFile;
      	} else {
        	alert("Canceled");
        	return null;
        }           
    };

    var textFile = getTextFile();
    if(textFile!=null){
    	textFile.open('r');
    	var namesArray = textFile.read().split("\n");
        textFile.close();

    	var doc = app.activeDocument;
    	for(var i = 0; i < namesArray.length; i++){
    		try{
  				var thisName = namesArray[i];
  				var thisItem = doc.selection[i];
  				thisItem.name = thisName;
    		} catch(e){
    			// do nothing
    		}
    	}
        alert("Done with " + i + " names");
    }

	} else {
		alert("No AI document is open or no selection.");
	}
}

RenameArtFromText();
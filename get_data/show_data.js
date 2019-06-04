// get value from url
var url_string = window.location.href; 
var url = new URL(url_string);
var value = url.searchParams.get("key");
console.log(value);

// from data_structure get data
var list_story = data.story;
console.log(list_story.length)
for(let i = 0;i<list_story.length;i++){

    if(list_story[i].key == value){
        console.log(list_story[i])
    }
}

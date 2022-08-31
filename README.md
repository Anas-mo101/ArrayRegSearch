# ArrayRegSearch
An attempt to create an algorithm that utilizes RegEx to search array elements. 

How it works
 1- Takes an array of objects and search key as input.
    
    let x = [
      { 'name' : 'Anas', 'age' : 21 },
      { 'name' : 'Katia', 'age' : 23},
      { 'name' : 'Kayden', 'age' : 5},
    ]
    
    let arrayRegSearch = ArrayRegSearch(x,'name');
 
 2- Uses array elements and their indeces to create "Mapped Search String" of format "{>index<,>search key value<}".
    
    [
      { 'name' : 'Anas', 'age' : 21},
      { 'name' : 'Katia', 'age' : 23},
      { 'name' : 'Kayden', 'age' : 5},
    ]
    
    "{0,Anas}{1,Katia}{2,Kayden}"
    
 3- Use a Regex pattern to extract the index of the element using a search key value.
 
    let index = arrayRegSearch.find('Katia');
    console.log('Index: ' + index);
    // Index: 1
 
Is it actually effective ?
  
  The short answer no, it is not effective and not adviced to be used as existing alternatives preform better.
  In Index file i prepared a demo to compare its speed against filter() and findIndex(), and as you may expected both preformed better, 
  roughly 2 to 3 times fasters than ArrayRegSearch.
  
  As a note the process of "Mapped Search String" creation is not measured as part of preformance, only the searching for index.
  
 What to improve ? 
  
 1- Optimizing String Mapping Format.
 
 2- Optimizing RegEx pattern.
  
 What I am planning to do ?
 
 1- Replicate the algorithm in different programming languages (python and php).
 
 2- Reduce the search time.
  
  
 
  

  

  

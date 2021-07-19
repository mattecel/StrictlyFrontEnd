
export function grabUser() {
    return JSON.parse(document.cookie);
}

export function clearCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export function addCookie(user) {
    let jUser = JSON.stringify(user);
    document.cookie = jUser;
}

export function calculateLevel(cuser){
    let experience = cuser.experience;
    let newLevel = Math.floor((experience * 69)/420);
    cuser.experience = newLevel;

    this.httpClient.post('http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/users/update',cuser)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        alert("lol didnt work");
      }

    )
  }

export function getCustomExercises(arr) {
  let newArr = [];
  arr.map(wo => {
    wo.customExercises.map(ce => {
      if(!(newArr.includes(ce))) {
        newArr.push(ce);
        newArr.map(ace => {
          if(ace.name == ce.name && ace != ce) {
            let index = newArr.findIndex(x => x.id === ace.id);
            newArr.splice(index,1);
          }
        });
      }
    });
  });
  return newArr;
}

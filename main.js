// var list = {
//     person1: {name: 'Maftuna', lastname: 'Yoqubova', old: 22},
//     person2: {name: 'Munisa', lastname: 'Yoqubova', old: 22}
// }

// document.querySelector('#list1').innerHTML=`${list.person1.name}${list.person1.lastname}.${list.person1.old} yoshda.`;

// document.querySelector('#list2').innerHTML=`${list.person2.name}${list.person2.lastname}.${list.person2.old} yoshda.`;

document.querySelector('table').innerHTML=`
    <tr>
        <th>Ismi</th>
        <th>Yoshi</th>
        <th>Familiyasi</th>
    </tr>

    <tr>
        <td>${list.person1.name}</td>
        <td>${list.person1.lastname}</td>
        <td>${list.person1.old}</td>
    </tr>

    
    <tr>
        <td>${list.person2.name}</td>
        <td>${list.person2.lastname}</td>
        <td>${list.person2.old}</td>
    </tr>
`
var knives=[
    {
        name:"Sample 1",
        steel:"O1,A2,1095,CPM154",
        size:"3",
        grind:"Scandy,saber,flat,hallow",
        bladeLength:"In Inches",
        handleLength:"In Inches",
        handleType:"Scale",
        liners:"Color",
        pins:{
            color:"bronze",
            number:"3",
            size:"In Inches",
            lanyard:true
        },
        bladeFinish:"Blued",
        spacer:"type of spacer",
        sheath:{
            leather:{
                color:"orange",
                tooled:"About tooling",
                hardware:"about hardware"
            },
            kydex:{
                color:"black",
                hardware:"about hardware"
            }
        },
        description:"text descripion",
        price:0,
        status:"sell"
    }
]

function addKnife(name,steel,size,grind,bladeLength,handleLength,handleType,liners,pins,bladeFinish,spacer,sheath,descripion,price, status){
        var Knife={
            name:name,
            steel:steel,
            size:size,
            grind:grind,
            bladeLength:bladeLength,
            handleLength:handleLength,
            handleType:handleType,
            liners:liners,
            pins:pins,
            bladeFinish:bladeFinish,
            spacer:spacer,
            sheath:sheath,
            description:descripion,
            status:status
        }
        //console.log("New Knife Created")

        knives.push(Knife)
        //console.log(knives.length)
    }

addKnife("Sample 2","New","6","New","New","New","New","New","New","New","New","New","New","New","sell")
addKnife("Sample 3","New","7","New","New","New","New","New","New","New","New","New","New","New","sell")
var store=[]
//console.log(knives)


function forsale(arr){
    var forsale=0
    var sold=0
    for(var i=0;i<arr.length;i++){
        var knife=arr[i] 
        //console.log(knife.status)
        if(knife.status==="sell"){
             
            forsale++
            //console.log(`${knife.name} is for sale at place ${i}`)
            store.push(knife)

        
        }
        else if(knife.status==="sold"){
             
            sold++
        }
        
    }
    //console.log(`Knives for Sale ${forsale}`)
    //console.log(`Knives Sold ${sold}`)
    //console.log(store)  
}

forsale(knives)

function update(arr){
    var sml=0
    var med=0
    var lrg=0
    for(var i=0;i<arr.length;i++){
        var knife=arr[i]
        if(knife.size<=4.5){
            sml++
            $("#small").append(`<h1>${knife.name}<h1>`)
            //console.log(knife.name)
        }
        else if (knife.size<=6){
            med++
            $("#medium").append(`<h1>${knife.name}<h1>`)
            //console.log(knife.name)
        }
        else if (knife.size>6){
            lrg++

            $("#large").append(`<h1>${knife.name}</h1>`)
            //console.log(knife.name)
        }
    }
    //console.log(` ${sml} Small Knives, ${med} Medium Knives, ${lrg} Large Knives  `)
}

update(store)
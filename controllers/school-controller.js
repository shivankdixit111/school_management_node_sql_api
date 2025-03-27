const db = require('../config/db')

const addSchool = async(req, res)=>{
   try{
      const {name, address, latitude, longitude} = req.body;
      console.log(name, address, latitude, longitude)
      await db.query(`INSERT INTO schools(name, address, latitude, longitude) 
        VALUES( ?, ?, ?, ? )`, [name, address, latitude, longitude])
 
      return res.status(200).json({message: "School added successfully !"})
   } catch(error) {
      return res.status(400).json({message: "Server error in adding School"})
   }
}

const listSchools = async(req, res)=>{
    try{
       const {userLatitude, userLongitude}  = req.body;
       //for calculating proximity for a (latitude, longitude) - we are using euclidian distance approximation
       const data = await db.query(`
           SELECT *, (POW(latitude-${userLatitude},2) + POW(longitude-${userLongitude},2)) AS distance
           FROM schools
           ORDER BY distance ASC;
       `)
 
        if(data[0].length == 0) {
          return res.status(200).json({message: "Schools not found!"})
        }
       return res.status(200).json({Schools: data[0]})

    } catch(error) {
      return res.status(400).json({message: "Server error in listing Schools"})
   }
}

module.exports = {addSchool, listSchools};
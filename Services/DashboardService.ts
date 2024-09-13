import axios from "axios"

export default class DashboardService {
  // todo load menus
  async Load_Menus() {
    try {
      let response = await axios.get<any>(
        "https://nodejs-serverless-function-express-eight-mocha.vercel.app/api/dashboard/menus"
      )
      if (response) {
        return response?.data?.data
      }
    } catch (err: any) {
      console.error(err)
    } finally {
      console.log("fullfilled")
    }
  }
  async Load_Skills() {
    try {
      let response = await axios.get<any>(
        "https://nodejs-serverless-function-express-eight-mocha.vercel.app/api/dashboard/skills/load-skills"
      )
      if (response) {
        return response?.data?.data
      }
    } catch (err: any) {
      console.error(err)
    } finally {
      console.log("fullfilled")
    }
  }
  async Load_Projects() {
    try {
      let response = await axios.get<any>(
        "https://nodejs-serverless-function-express-eight-mocha.vercel.app/api/dashboard/projects/load-projects"
      )
      if (response) {
        return response?.data?.data
      }
    } catch (err: any) {
      console.error(err)
    } finally {
      console.log("fullfilled")
    }
  }
  async Load_Pages() {
    try {
      let response = await axios.get<any>(
        "https://nodejs-serverless-function-express-eight-mocha.vercel.app/api/dashboard/layoutPages/load-pages"
      )
      if (response) {
        return response?.data?.data
      }
    } catch (err: any) {
      console.error(err)
    } finally {
      console.log("fullfilled")
    }
  }
}

export const dashboardService = new DashboardService()

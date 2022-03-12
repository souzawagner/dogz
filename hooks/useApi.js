import * as Realm from 'realm-web';
import { useEffect } from "react";

if (typeof window !== "undefined") {
  const params = new URLSearchParams(window.location.search)
  const app = new Realm.App(params.get('client'));
  const credentials = Realm.Credentials.apiKey(params.get('key'));

  class DogzApi {
    static get db() {
      return DogzApi.client.db('dogs').collection('feed');
    }

    static get client() {
      return app.currentUser.mongoClient('mongodb-atlas') || {};
    }

    static async login() {
      return app.logIn(credentials);
    }

    static async getDogs() {
      const start = new Date();
      const end = new Date();

      start.setHours(0,0,0,0);
      end.setHours(23,59,59,999);

      return DogzApi.db.find({
        date: { $gte: start, $lt: end }
      });
    }

    static async feedDogs(dogs) {
      return DogzApi.db.insertMany(
        dogs.map((dog) => ({ name: dog.name, date: new Date() }))
      );
    }
  }
}

export default function useApi() {
  return typeof window !== "undefined" ? DogzApi : undefined;
}
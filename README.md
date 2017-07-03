# Short Intro
It is a NG4 demo(Parcel Query App) with CRUD + Authorization  + i18N + Chart

# demo for query , register, login, chart, i18n, etc
![demo](images/queryparceldemo.gif)


# install angular cli 1.1.1 , you need to have node >6, npm>3.10
```
npm install -g @angular/cli@1.1.1
```
# intall dependency for this project
```
npm install 
```
# start json-server data.json to mock backend REST Service
```
json-server data.json
```
![json-server](images/json-server.png)
# start project - frontend
```
ng serve , go to http://localhost:4200
```
# display chart
![chart](images/chart.png)

# list DHL Parcels 

![dhllist](images/dhllist.png)


# list DHL Parcel in Detail

![dhllist](images/dhldetails.png)


# list BPost Parcel in Detail, it has access control only for login user

![register](images/register.png)

![login](images/login.png)

# it uses i18n feature, supports English and Chinese

![i18n](images/i18ncn.png)

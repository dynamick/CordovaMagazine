angular.module('App.service.repository', [])
    .factory('Repository', ['$rootScope', '$http', 'md5',
        function ($rootScope, $http, md5) {

            return {

                data: [],
                status: '',
                method: 'GET',
                url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=10&feedurl=http%3A%2F%2Fxml.corriereobjects.it%2Frss%2Fhomepage.xml',

                emptyData: function () {
                    this.data = [];
                },
                fetchData: function() {
                    code = null;
                    response = null;
                    self = this;
                    $http({method: this.method, url: this.url}).
                    success(function(data, status) {
                        self.status = status;
                        //angular.copy( data.value.items, self.data );
                        parser = document.createElement('a');
                        for (var i = 0; i < data.value.items.length; i++) {
                            self.data.push(data.value.items[i]);
                            parser.href = self.data[i].guid.content;
                            self.data[i].id = md5.createHash( data.value.items[i].title || '') //data.value.items[i].$hashKey;// parser.pathname;
                        }
                    }).
                    error(function(data, status) {
                        self.data = data || "Request failed";
                        self.status = status;
                        alert("fail");
                    });
                },

                getPost: function(id) {
                    found = false;
                    i = 0;
                    while( found == false && i < this.data.length ) {
                        if (this.data[i].id == id ) {
                            found = this.data[i];
                        }
                        i++;
                    }
                    return found;
                },
                getPostIndex: function(id) {
                    found = false;
                    i = 0;
                    while( found == false && i < this.data.length ) {
                        if (this.data[i].id == id ) {
                            found = i;
                        }
                        i++;
                    }
                    return found;
                },

                getNext: function( id ) {
                    found = false;
                    i = 0;
                    while( found == false && i < this.data.length ) {
                        if (this.data[i].id == id ) {
                            found = i + 1;
                        }
                        i++;
                    }

                    if ( found >= this.data.length ) {
                        found = false
                    } else {
                        found = this.data[found].id;
                    }

                    return found;
                },

                getPrev: function( id ) {
                    found = false;
                    i = 0;
                    while( found == false && i < this.data.length ) {
                        console.log('questo id: '+id);
                        console.log(this.data[i].id);
                        if (this.data[i].id == id ) {
                            found = i - 1;
                        }
                        i++;
                    }

                    if ( found < 0 ) {
                        found = false
                    } else {
                        found = this.data[found].id;
                    }

                    return found;
                }


            }

    }]);
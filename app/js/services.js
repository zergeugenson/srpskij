card.factory('getDatas', function($q, $http){
	return function(files){
		var promises = files.map(function(file){
			var deffered  = $q.defer();
			$http({ url : file, method: 'GET' }).
				success(function(data){
					deffered.resolve(data);
				}).
				error(function(message, status, headers, config){
					deffered.reject({message:message, status:status, url:config.url});
				});
			return deffered.promise;
		});
		return $q.all(promises);
	}
});
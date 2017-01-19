'use strict';
var digitalbankingDirectives = angular.module('digitalbankingDirectives', []).config( [
'$compileProvider',
function( $compileProvider )
{ 
$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
}
]);
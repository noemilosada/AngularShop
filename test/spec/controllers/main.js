/**
 * Test cases for AngularShop Controllers
 */
'use strict';

describe('AngularShop Controllers', function() {

    // Products Controller
    describe('ProductsController', function() {
        var scope, productsCtrl, $httpBackend;

        // Load app module
        beforeEach(module('angularShopAppController'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('scripts/jsonData/products.json').respond(
                {"products": [{"id": 10}, {"id": 1}]}
            );

            scope = $rootScope.$new();
            productsCtrl = $controller('ProductsController', {$scope: scope});
        }));

        it('Should create "products" model with 2 products fetched from xhr', function() {
            expect(scope.products).toBeUndefined();
            $httpBackend.flush();

            expect(scope.products).toEqual(
                [{"id": 10}, {"id": 1}]
            );
        });

        it('Should set the default value of orderProp model to name', function() {
            expect(scope.orderProp).toBe('name');
        });

    });

});

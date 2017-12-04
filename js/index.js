var app = angular.module('formvalida', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl', function($scope) {
    var uid = 2;
    $scope.contatos = [
            {
                id: 0,
                "nome": "Cecilia Marin",
                "email": "cecilia@marin.com",
                "cidade": "São Paulo",
                "estado": "São Paulo"
            },
            {
                id: 1,
                "nome": "Renata Rodrigues",
                "email": "renata@rodrigues.com",
                "cidade": "Recife",
                "estado": "Pernambuco"
            }
    ]

    $scope.dataTableOpt = {
    //custom datatable options 
    // or load data through ajax call also
    "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
    };


    // Crud da aplicação
    $scope.salvar = function () {
        if ($scope.novo_contato.id == null) {
            $scope.novo_contato.id = uid++;
            $scope.contatos.push($scope.novo_contato);
        } else {
            for (i in $scope.contatos) {
                if ($scope.contatos[i].id == $scope.novo_contato.id) {
                    $scope.contatos[i] = $scope.novo_contato;
                }
            }
        }
        $scope.novo_contato = {};
    };

    $scope.delete = function (contato) {
        if (confirm('Tem certeza que deseja excluir o contato ' + contato.nome)) {
            for (i in $scope.contatos) {
                if ($scope.contatos[i].id == contato.id) {
                    $scope.contatos.splice(i, 1);
                    $scope.novo_contato = {};
                }
            }
            swal('Parabéns!', 'Contato excluído com sucesso!', 'success');
        }
    };

    $scope.editar = function(id) {
        for (i in $scope.contatos) {
            if ($scope.contatos[i].id == id) {
                $scope.novo_contato = angular.copy($scope.contatos[i]);
            }
        }
    };
});
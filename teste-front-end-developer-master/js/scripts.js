$(document).ready(function() {

	var mysql_insumo = "SELECT mat.quantidade, mat.nome, mat.marca, mat.preco, ped.* FROM pedidos ped INNER JOIN materiais mat ON ped.id = mat.id_pedido LIMIT 4";

		mysqlQuery(mysql_insumo, function(pedidos){
			var obj = JSON.parse(pedidos);
			var tabela_body = document.getElementById("pedidos");

			obj.forEach(function(ped){
				var pedidos_body = "<tr>"+
		    		"<td>"+ ped.numero+"</td>"+	
		    		"<td>"+ ped.nome+"</td>"+	
		    		"<td>"+ ped.marca+"</td>"+	
		    		"<td>"+ ped.data_de_compra+"</td>"+	
		    		"<td>"+ ped.quantidade+"</td>"+	
		    		"<td>"+ ped.preco+"</td>"+	// Fazer a soma total tabela material
					"</tr>";

		    		tabela_body.innerHTML += pedidos_body;
			});
		}); 


	var mysql_insumo = "SELECT ins.*, mat.marca FROM insumos ins INNER JOIN materiais mat ON ins.id_material = mat.id LIMIT 2";

		mysqlQuery(mysql_insumo, function(insumos){
			var obj = JSON.parse(insumos);
			var tabela_body = document.getElementById("insumos");

			obj.forEach(function(ins){
				var insumos_body = "<tr>"+
		    		"<td>"+ ins.marca+"</td>"+	
		    		"<td>"+ ins.descricao+"</td>"+	
		    		"<td>"+ ins.quantidade+"</td>"+	
		    		"<td>"+ ins.preco+"</td>"+	
					"</tr>";
		    		tabela_body.innerHTML += insumos_body;
			});
		});

		var mysql_insumo = "SELECT ins.*, mat.marca FROM insumos ins INNER JOIN materiais mat ON ins.id_material = mat.id";

		mysqlQuery(mysql_insumo, function(insumos){
			var obj = JSON.parse(insumos);
			var tabela_body = document.getElementById("insumos");
			var tabela_body = document.getElementById("add_insumos");
			obj.forEach(function(ins){
				var insumos_body = "<tr>"+
		    		"<td>"+ ins.marca+"</td>"+	
		    		"<td>"+ ins.descricao+"</td>"+	
		    		"<td>"+ ins.quantidade+"</td>"+	
		    		"<td>"+ ins.preco+"</td>"+	
		    		"<td><input type=\"checkbox\" name=\"\" id="+ ins.id +" value=\"ok\" /></td>"+	
					"</tr>";
		    		tabela_body.innerHTML += insumos_body;
			});
			
		});


	var mysql_query = "SELECT * FROM solicitantes";
		mysqlQuery(mysql_query, function(result){
		    	// mostra o resultado da query
		    	var obj = JSON.parse(result);
		    	var table_body =  document.getElementById("conteudo");

		    	obj.forEach(function(el){
		    		var html_body = "<tr>"+
		    		"<td>"+el.nome+"</td>"+
		    		"<td>"+el.telefone+"</td>"+
                    "<td>"+el.cpf+"</td>"+
                    "<td>"+el.cep+"</td>"+
                    "<td>"+el.rua+"</td>"+                    
                    "<td>"+el.numero+"</td>"+
                    "<td>"+el.cidade+"</td>"+
                    "<td>"+el.estado+"</td>"+	
					"</tr>";

		    		table_body.innerHTML += html_body;					
		    		
		    	});

		    });

		
		var mysql_insumo = "SELECT * FROM solicitantes";

		mysqlQuery(mysql_insumo, function(entrega){
			var obj = JSON.parse(entrega);
			var tabela_body = document.getElementById("entrega");

			obj.forEach(function(ent){
				var entrega_body = "<tr>"+
		    		"<td>"+ ent.cep+"</td>"+	
		    		"<td>"+ ent.rua+"</td>"+	
		    		"<td>"+ ent.numero+"</td>"+	
		    		"<td>"+ ent.cidade+"</td>"+	
		    		"<td>"+ ent.estado+"</td>"+	
					"</tr>";

		    		tabela_body.innerHTML += entrega_body;
			});
		});			

});
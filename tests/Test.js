import Console from '../dist';

const Log = new Console();

Log.newLine();
Log.log('Mensagem do tipo Log!');
Log.info('Mensagem do tipo INFORMAÇÃO!');
Log.war('Mensagem do tipo ALERTA!');
Log.err('Mensagem do tipo ERRO!');
Log.ok('Mensagem do tipo SUCESSO!');
Log.newLine();

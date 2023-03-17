import { EntradaDomainEntityBase } from "../../../entities/pedido";
import { EntradaCreadaEventPublisherBase } from './';
import { IEventPublisher } from "../../../../../../../../libs/sofka/interface";

class EventPublisher extends EntradaCreadaEventPublisherBase { }

describe('GotEntradaEventPublisherBase', () => {
  let eventPublisher: EventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new EventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'entrega_a_domicilio.entrada-creada';
    const response = new EntradaDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});

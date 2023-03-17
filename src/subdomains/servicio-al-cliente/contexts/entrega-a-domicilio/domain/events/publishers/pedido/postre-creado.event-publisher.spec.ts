import { PostreDomainEntityBase } from "../../../entities/pedido";
import { PostreCreadoEventPublisherBase } from './';
import { IEventPublisher } from "../../../../../../../../libs/sofka/interface";

class EventPublisher extends PostreCreadoEventPublisherBase { }

describe('GotPostreEventPublisherBase', () => {
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
    const topic = 'entrega_a_domicilio.postre-creado';
    const response = new PostreDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});

